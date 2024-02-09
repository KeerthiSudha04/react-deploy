// // AuthComponent.tsx

// import React, { useState } from "react";
// import { authenticateUser, User } from "../mockBackend";

// const AuthComponent: React.FC<{ onLogin: (user: User) => void }> = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const user = await authenticateUser(username, password);
//       onLogin(user);
//     } catch (error : any) {
//       setError(error.message);
//     }
//   };

//   return (

    
//       <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' ,paddingTop:'50px'}}>
//       <h2 style={{ marginBottom: '20px' }}>Login Page</h2>
//       <form onSubmit={handleLogin}>
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="username">Username:</label>
//           <input
//             id="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="password">Password:</label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <br/>
//         <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '5px', background: 'blue', color: '#fff', border: 'none' }}>Login</button>
//       </form>
//       {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
//     </div>
  
    

//   );
// };

// export default AuthComponent;
export{}