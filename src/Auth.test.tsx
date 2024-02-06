
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Auth from './Auth';

// Mock the AuthComponent to simulate its behavior
jest.mock('./components/AuthComponent', () => {
    return jest.fn(props => <div data-testid="mock-auth-component" />);
});

describe('Auth Component', () => {
    it('renders AuthComponent when user is not logged in', () => {
        const { getByTestId } = render(<Auth />);
        expect(getByTestId('mock-auth-component')).toBeInTheDocument();
    });

    it('renders welcome message and logout button when user is logged in', () => {
        const { getByText, queryByTestId } = render(<Auth />);

        // Simulate login by setting user state
  
        const authComponent = queryByTestId('mock-auth-component');
        if (authComponent) {
            fireEvent.click(authComponent as HTMLElement);
        }


        // Check if welcome message and logout button are rendered
        expect(getByText('Welcome, testuser!')).toBeInTheDocument();
        expect(getByText('Logout')).toBeInTheDocument();
    });

    it('logs out user when Logout button is clicked', () => {
        const { getByText, queryByText } = render(<Auth />);

        // Simulate login by setting user state

        const authComponent = queryByText('mock-auth-component');
        if (authComponent !== null) {
            fireEvent.click(authComponent);
        }

        // Check if logout button is rendered
        expect(getByText('Logout')).toBeInTheDocument();

        // Simulate logout by clicking logout button
        fireEvent.click(getByText('Logout'));

        // Check if user state is null after logout
        expect(queryByText('Logout')).not.toBeInTheDocument();
    });
});
