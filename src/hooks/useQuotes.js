import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDoc, collection } from "firebase/firestore";

export function useQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quotesSnapshot = await getDoc(collection(db, "quotes"));
        const quotesData = quotesSnapshot.docs.map((q) => ({
          id: q.id,
          ...q.data(),
        }));
        setQuotes(quotesData);
      } catch (error) {
        alert("There has been an error: ", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);
  return { quotes, isLoading, error };
}
