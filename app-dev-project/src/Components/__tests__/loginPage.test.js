import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../Routes/LoginPage';

afterEach(() => {
    cleanup();
});

test('Should render login component', () => {
    render(
        <Router>
            <LoginPage />
        </Router>
    );
    
    // Elements
    const loginComponentTitle = screen.getByTestId('loginComponent-title');
    const loginComponentEmail = screen.getByTestId('loginComponent-emailInput');
    const loginComponentPassword = screen.getByTestId('loginComponent-passwordInput');
    const loginComponentButton = screen.getByTestId('loginComponent-button');
    const loginComponentSignupText = screen.getByTestId('loginComponent-signupText');

    expect(loginComponentTitle).toHaveTextContent('Log In');
    expect(loginComponentEmail).toHaveTextContent('Email');
    expect(loginComponentPassword).toHaveTextContent('Password');
    expect(loginComponentButton).toHaveTextContent('Log In');
    expect(loginComponentSignupText).toHaveTextContent("Don't have an account? Sign Up");
});