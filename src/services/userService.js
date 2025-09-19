// сервіс відповідає тільки за отримання даних з API
export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data.slice(0, 7).map((user, index) => ({
    id: user.id, // додаємо id для унікального ключа
    name: user.name,
    role: [
      "CEO",
      "Manager",
      "Designer",
      "Developer",
      "QA Engineer",
      "Analyst",
      "Intern",
    ][index % 7],
    avatarUrl: `https://i.pravatar.cc/150?img=${index + 1}`,
  }));
}
