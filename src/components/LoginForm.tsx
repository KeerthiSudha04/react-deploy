// LoginForm.tsx
import withLoadingIndicator from '../HOC/Hoc';
import React, { useState } from 'react';

const LoginForm: React.FC<{ onLogin: (username: string, password: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
    } else {
      setError('');
      onLogin(username, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};


const LazyLoading = withLoadingIndicator(LoginForm);

export default LazyLoading;
