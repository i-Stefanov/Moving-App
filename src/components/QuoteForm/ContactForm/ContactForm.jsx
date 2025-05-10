import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuoteForm } from "../QuoteFormProvider";
import styles from "./ContactForm.module.css";

// 1. Validation schema
const schema = yup.object({
  name: yup.string().required("Моля, въведете име"),
  email: yup
    .string()
    .email("Невалиден имейл")
    .required("Имейлът е задължителен"),
  phone: yup.string().required("Телефонът е задължителен"),
});

function ContactForm() {
  const { formData, next } = useQuoteForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit(next)} className={styles.contactForm}>
        <h2 className={styles.contactFormTitle}>Контактна информация</h2>
        <div className={styles.inputGroup}>
          <input
            placeholder="Име"
            id="name"
            {...register("name")}
            className={styles.contactFormInput}
          />
          <label htmlFor="name" className={styles.contactFormLabel}>
            Име
          </label>
          {errors.name && (
            <p className={styles.contactFormError}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            placeholder="Имейл адрес"
            {...register("email")}
            className={styles.contactFormInput}
          />
          <label htmlFor="email" className={styles.contactFormLabel}>
            Имейл
          </label>
          {errors.email && (
            <p className={styles.contactFormError}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputGroup}>
          <input
            id="phone"
            placeholder="Телефонен номер"
            {...register("phone")}
            className={styles.contactFormInput}
          />
          <label htmlFor="phone" className={styles.contactFormLabel}>
            Телефон
          </label>
          {errors.phone && (
            <p className={styles.contactFormError}>{errors.phone.message}</p>
          )}
        </div>

        <button type="submit" className={styles.contactFormButton}>
          Напред
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
