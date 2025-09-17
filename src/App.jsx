// App.jsx
import { useEffect, useState } from "react";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Додаємо role і avatarUrl до кожного юзера
        const extendedUsers = data.slice(0, 7).map((user, index) => ({
          name: user.name,
          role: ["CEO", "Manager", "Designer", "Developer", "QA Engineer", "Analyst", "Intern"][index % 7],
          avatarUrl: `https://i.pravatar.cc/150?img=${index + 1}`,
        }));
        setUsers(extendedUsers);
      });
  }, []);

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profiles">
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
