import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import { fetchUsers } from "./services/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
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
