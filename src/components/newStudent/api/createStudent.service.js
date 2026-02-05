const API_URL = "http://localhost:3001";

export async function createStudent( name, age, classroom_id ) {
  const response = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      age,
      classroom_id,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "FAILED_TO_CREATE_STUDENT");
  }

  return response.json();
}
