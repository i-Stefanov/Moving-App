import { useQuoteForm } from "./QuoteFormProvider";
import ContactForm from "./ContactForm/ContactForm";
import MoveDetailsForm from "./MoveDetailsForm";
import ReviewForm from "./ReviewForm";
import ThankYou from "./ThankYou";

function QuoteFormSteps() {
  const { step } = useQuoteForm();

  return (
    <>
      {step === 1 && <ContactForm />}
      {step === 2 && <MoveDetailsForm />}
      {step === 3 && <ReviewForm />}
      {step === 4 && <ThankYou />}
    </>
  );
}

export default QuoteFormSteps;
