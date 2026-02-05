import { useEffect, useState } from "react";
import { getAllStudents } from "../api/listAllStudents.service.js";

export function useGetAllStudents(classroom_id) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getAllStudents(classroom_id);
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  return {
    students,
    loading,
    error,
  };
}
