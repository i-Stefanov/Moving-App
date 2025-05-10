import { QuoteFormProvider } from "./QuoteFormProvider";
import QuoteFormSteps from "./QuoteFormSteps";

function QuoteForm() {
  return (
    <QuoteFormProvider>
      <QuoteFormSteps />
    </QuoteFormProvider>
  );
}

export default QuoteForm;
