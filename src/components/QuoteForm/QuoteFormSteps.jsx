import { useQuoteForm } from "./QuoteFormProvider";
import ContactForm from "./ContactForm/ContactForm";
import MoveDetailsForm from "./MoveDetailsForm";
import ReviewForm from "./ReviewForm";

function QuoteFormSteps() {
  const { step } = useQuoteForm();

  return (
    <>
      {step === 1 && <ContactForm />}
      {step === 2 && <MoveDetailsForm />}
      {step === 3 && <ReviewForm />}
    </>
  );
}

export default QuoteFormSteps;
