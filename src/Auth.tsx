// App.tsx

import React, { useState } from "react";
import AuthComponent from "./components/AuthComponent";
import { User } from "./mockBackend";

const Auth: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <AuthComponent onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
