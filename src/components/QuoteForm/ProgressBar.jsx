import styles from "./ProgressBar.module.css";
import { useQuoteForm } from "./QuoteFormProvider";

const ProgressBar = () => {
  const { step } = useQuoteForm();

  const totalSteps = 4;
  const percent = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.progressBarTrack}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className={styles.progressText}>
        Стъпка {step} от {totalSteps}
      </p>
    </div>
  );
};

export default ProgressBar;
