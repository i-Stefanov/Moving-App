import { useQuoteForm } from "./QuoteFormProvider";
import styles from "./ContactForm/ContactForm.module.css"; // reuse existing styles
import { useForm } from "react-hook-form";

function ReviewForm() {
  const { formData, back, next, setFormData } = useQuoteForm();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      additionalNotes: formData.additionalNotes || "",
    },
  });

  const handleFinalSubmit = (data) => {
    setFormData({ ...formData, additionalNotes: data.additionalNotes });
    next(); // this would be the final step like ThankYou or summary submit
  };

  return (
    <form
      onSubmit={handleSubmit(handleFinalSubmit)}
      className={styles.contactForm}
    >
      <h2 className={styles.contactFormTitle}>Преглед на заявката</h2>

      <ul style={{ lineHeight: "1.6", paddingLeft: "1rem" }}>
        <li>
          <strong>Име:</strong> {formData.name}
        </li>
        <li>
          <strong>Имейл:</strong> {formData.email}
        </li>
        <li>
          <strong>Телефон:</strong> {formData.phone}
        </li>
        <li>
          <strong>Начален адрес:</strong> {formData.pickupAddress}
        </li>
        <li>
          <strong>Краен адрес:</strong> {formData.destinationAddress}
        </li>
        <li>
          <strong>Дата на преместване:</strong> {formData.moveDate}
        </li>
        <li>
          <strong>Тип имот:</strong> {formData.propertyType}
        </li>
      </ul>

      <div className={styles.inputGroup}>
        <textarea
          {...register("additionalNotes")}
          placeholder="Допълнителни бележки (не е задължително)"
          className={styles.contactFormInput}
          rows={4}
        />
        <label className={styles.contactFormLabel}>Допълнителни бележки</label>
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
          Потвърди
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
