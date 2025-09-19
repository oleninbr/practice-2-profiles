import "./App.css";
import Profile from "./components/Profile";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { users, loading, error } = useUsers();

  return (
    <div className="app">
      <h1>User Profiles</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="profiles">
        {users.map((user) => (
          // використовуємо user.id замість index для унікального ключа
          <Profile
            key={user.id}
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
