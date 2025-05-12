import ProgressBar from "./ProgressBar";
import { QuoteFormProvider } from "./QuoteFormProvider";
import QuoteFormSteps from "./QuoteFormSteps";

function QuoteForm() {
  return (
    <QuoteFormProvider>
      <ProgressBar />
      <QuoteFormSteps />
    </QuoteFormProvider>
  );
}

export default QuoteForm;
