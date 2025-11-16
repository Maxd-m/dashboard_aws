// src/hooks/useSalesByCategory.js
import { useEffect, useState } from "react";
import { getSalesByCategory } from "../api/sales";

export default function useSaleCat() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getSalesByCategory();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { data, loading, error };
}
