import { useState } from "react";
import { createStudent } from "../api/createStudent.service";

export function useCreateNewStudent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newStudent, setNewStudent] = useState(null);

  async function create(student) {
    try {
      setLoading(true);
      setError(null);

      const data = await createStudent(
        student.name,
        student.age,
        student.classroom_id
      );

      setNewStudent(data);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    createStudent: create,
    newStudent,
    loading,
    error,
  };
}
