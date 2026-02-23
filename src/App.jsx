import useUser from "./hooks/useUser";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { users, isLoading } = useUser();
  return (
    <div style={{ padding: 40 }}>
      <Toaster position="top-right" />
      <h1>Axios Instance Demo + Toasts + Loading skeleton</h1>
      <h3>User List:</h3>

      {isLoading ? (
        <div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                height: 30,
                width: 300,
                marginBottom: 10,
                background: "linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%)",
                backgroundSize: "1000px 100%",
                borderRadius: 4,
                animation: "shimmer 2s infinite linear",
              }}
            />
          ))}
          <style>{`
            @keyframes shimmer {
              0% { background-position: -1000px 0; }
              100% { background-position: 1000px 0; }
            }
          `}</style>
        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
