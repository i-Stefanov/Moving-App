import { createContext, useContext, useState } from "react";

// 1. Create the context
const QuoteFormContext = createContext();

// 2. Export a custom hook to use the context
export const useQuoteForm = () => useContext(QuoteFormContext);

// 3. Create the Provider component
export function QuoteFormProvider({ children }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    // Add more fields as needed later
  });

  // Advance to the next step and update data
  const next = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  // Go back to previous step
  const back = () => setStep((prev) => prev - 1);

  return (
    <QuoteFormContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
        next,
        back,
      }}
    >
      {children}
    </QuoteFormContext.Provider>
  );
}
