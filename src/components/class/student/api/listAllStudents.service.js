const API_URL = "http://localhost:3001"; // ajuste se precisar

export async function getAllStudents(classroom_id) {
  const response = await fetch(
    `${API_URL}/students?classroom_id=${classroom_id}`
  );

  if (!response.ok) {
    throw new Error("FAILED_TO_FETCH_STUDENTS");
  }

  return response.json();
}
