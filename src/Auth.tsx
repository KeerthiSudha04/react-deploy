// // App.tsx

// import React, { useState } from "react";
// import AuthComponent from "./components/AuthComponent";
// import { User } from "./mockBackend";

// const Auth: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   const handleLogin = (user: User) => {
//     setUser(user);
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <div style={{textAlign:'center',paddingTop:'50px'}}>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.username}!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <AuthComponent onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from "react";
import { authenticateUser, User } from "./mockBackend";

const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await authenticateUser(username, password);
      setUser(user);
      setError(null); // Clear any previous error
    } catch (error: any) {
      setUser(null); // Clear user if authentication fails
      setError(error.message);
    }
  };

  const handleLogout = () => {
    setUsername(""); // Clear username
    setPassword(""); // Clear password
    setUser(null); // Clear user
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center', paddingTop: '50px' }}>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>
            <br />
            <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: 'blue', color: '#fff', border: 'none' }}>Login</button>
          </form>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </div>
      )}
    </div>
  );
};

export default Auth;

