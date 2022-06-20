import { useEffect, useState } from "react";

export const useUser = (id) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.message);
        }
        setUser(json.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);
  return { user, error, loading };
};
