export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data.slice(0, 7).map((user, index) => ({
    name: user.name,
    role: ["CEO",
        "Manager",
        "Designer", "Developer",
        "QA Engineer",
        "Analyst",
        "Intern"
      ][index % 7],
    avatarUrl: `https://i.pravatar.cc/150?img=${index + 1}`,
  }));
}
