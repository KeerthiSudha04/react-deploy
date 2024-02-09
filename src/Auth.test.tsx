
// import React from 'react';
// import { render, fireEvent, waitFor,getByRole, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // for enhanced Jest matchers
// // import AuthComponent from './components/AuthComponent';
// import { authenticateUser, User } from './mockBackend';// Import the mockBackend functions

// // Mock the authenticateUser function
// jest.mock('./mockBackend', () => ({
//   authenticateUser: jest.fn(),
// }));

// describe('AuthComponent', () => {
//   it('renders login form', () => {
//     render(<AuthComponent onLogin={() => {}} />);
//     expect(screen.getByLabelText('Username:')).toBeInTheDocument();
//     expect(screen.getByLabelText('Password:')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
//   });

//   it('calls authenticateUser with username and password on form submission', async () => {
//     render(<AuthComponent onLogin={() => {}} />);
//     const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
//     const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
//     const loginButton = screen.getByRole('button', { name: 'Login' });

//     // Set input values
//     fireEvent.change(usernameInput, { target: { value: 'testuser' } });
//     fireEvent.change(passwordInput, { target: { value: 'password' } });

//     // Mock authenticateUser to return a dummy user
//     (authenticateUser as jest.Mock).mockResolvedValueOnce({ username: 'testuser' });

//     // Submit form
//     fireEvent.click(loginButton);

//     // Wait for authentication to complete
//     await waitFor(() => expect(authenticateUser).toHaveBeenCalledWith('testuser', 'password'));
//   });

//   it('displays error message if authentication fails', async () => {
//     render(<AuthComponent onLogin={() => {}} />);
//     const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
//     const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
//     const loginButton = screen.getByRole('button', { name: 'Login' });

//     // Set input values
//     fireEvent.change(usernameInput, { target: { value: 'testuser' } });
//     fireEvent.change(passwordInput, { target: { value: 'password' } });

//     // Mock authenticateUser to throw an error
//     (authenticateUser as jest.Mock).mockRejectedValueOnce(new Error('Invalid credentials'));

//     // Submit form
//     fireEvent.click(loginButton);

//     // Wait for error message to be displayed
//     await waitFor(() => expect(screen.getByText('Invalid credentials')).toBeInTheDocument());
//   });
// });



import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Auth from './Auth';
import { authenticateUser } from './mockBackend';

jest.mock('./mockBackend', () => ({
  authenticateUser: jest.fn()
}));

describe('Auth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render login form initially', () => {
    const { getByText, getByLabelText } = render(<Auth />);
    expect(getByText('Login Page')).toBeInTheDocument();
    expect(getByLabelText('Username:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should handle successful login', async () => {
    const user = { username: 'testuser', email: 'test@example.com' };
    (authenticateUser as jest.Mock).mockResolvedValue(user);

    const { getByLabelText, getByText } = render(<Auth />);

    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => expect(getByText(`Welcome, ${user.username}!`)).toBeInTheDocument());
    expect(getByText('Logout')).toBeInTheDocument();
    expect(authenticateUser).toHaveBeenCalledWith('testuser', 'testpassword');
  });

  it('should handle login failure', async () => {
    const errorMessage = 'Invalid username or password';
    (authenticateUser as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const { getByLabelText, getByText } = render(<Auth />);

    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => expect(getByText(errorMessage)).toBeInTheDocument());
    expect(getByText('Login Page')).toBeInTheDocument();
    expect(getByLabelText('Username:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should handle logout', async () => {
    const user = { username: 'testuser', email: 'test@example.com' };
    (authenticateUser as jest.Mock).mockResolvedValue(user);

    const { getByLabelText, getByText } = render(<Auth />);
    
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });
    fireEvent.click(getByText('Login'));
    
    await waitFor(() => expect(getByText(`Welcome, ${user.username}!`)).toBeInTheDocument());

    fireEvent.click(getByText('Logout'));

    expect(getByText('Login Page')).toBeInTheDocument();
    expect(getByLabelText('Username:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
});
