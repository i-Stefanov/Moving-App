import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

  const handleFinalSubmit = async (data) => {
    const completeData = {
      ...formData,
      additionalNotes: data.additionalNotes,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "quotes"), completeData);
      setFormData(completeData); // Update the context with the complete data
      console.log("Document written with ID: ", completeData.id);
      next(); // go to the Thank You screen
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("Грешка при запис. Опитайте отново.");
    }
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
