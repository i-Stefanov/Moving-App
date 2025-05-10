import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useQuoteForm } from "./QuoteFormProvider";
import styles from "./ContactForm/ContactForm.module.css";

const schema = yup.object({
  pickupAddress: yup.string().required("Начален адрес е задължителен"),
  destinationAddress: yup.string().required("Краен адрес е задължителен"),
  moveDate: yup.string().required("Дата на преместване е задължителна"),
  propertyType: yup.string().required("Тип имот е задължителен"),
});

function MoveDetailsForm() {
  const { formData, next, back } = useQuoteForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(next)} className={styles.contactForm}>
      <h2 className={styles.contactFormTitle}>Детайли за преместването</h2>

      <div className={styles.inputGroup}>
        <input
          {...register("pickupAddress")}
          placeholder="Начален адрес"
          className={styles.contactFormInput}
        />
        <label className={styles.contactFormLabel}>Начален адрес</label>
        {errors.pickupAddress && (
          <p className={styles.contactFormError}>
            {errors.pickupAddress.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <input
          {...register("destinationAddress")}
          placeholder="Краен адрес"
          className={styles.contactFormInput}
        />
        <label className={styles.contactFormLabel}>Краен адрес</label>
        {errors.destinationAddress && (
          <p className={styles.contactFormError}>
            {errors.destinationAddress.message}
          </p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="date"
          {...register("moveDate")}
          className={styles.contactFormInput}
        />
        <label className={styles.contactFormLabel}>Дата на преместване</label>
        {errors.moveDate && (
          <p className={styles.contactFormError}>{errors.moveDate.message}</p>
        )}
      </div>

      <div className={styles.inputGroup}>
        <select
          {...register("propertyType")}
          className={styles.contactFormInput}
        >
          <option value="">Изберете тип имот</option>
          <option value="apartment">Апартамент</option>
          <option value="house">Къща</option>
          <option value="office">Офис</option>
        </select>
        <label className={styles.contactFormLabel}>Тип имот</label>
        {errors.propertyType && (
          <p className={styles.contactFormError}>
            {errors.propertyType.message}
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <button
          type="button"
          onClick={back}
          className={styles.contactFormButton}
        >
          Назад
        </button>
        <button type="submit" className={styles.contactFormButton}>
          Напред
        </button>
      </div>
    </form>
  );
}

export default MoveDetailsForm;
