import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupComponent from '../SignupComponent';

afterEach(() => {
    cleanup();
});

test('Should render home page', () => {
    render(
        <Router>
            <SignupComponent />
        </Router>
    );

    // Elements
    const loginComponentTitle = screen.getByTestId('signupComponent-title');
    const loginComponentEmail = screen.getByTestId('signupComponent-emailInput');
    const loginComponentDisplayName = screen.getByTestId('signupComponent-displayName');
    const loginComponentPassword = screen.getByTestId('signupComponent-passwordInput');
    const loginComponentPasswordConf = screen.getByTestId('signupComponent-passwordConfInput');
    const loginComponentButton = screen.getByTestId('signupComponent-button');
    const loginComponentSignupText = screen.getByTestId('signupComponent-loginText');

    expect(loginComponentTitle).toHaveTextContent('Sign Up');
    expect(loginComponentEmail).toHaveTextContent('Email:');
    expect(loginComponentDisplayName).toHaveTextContent('Display Name:');
    expect(loginComponentPassword).toHaveTextContent('Password:');
    expect(loginComponentPasswordConf).toHaveTextContent('Confirm password:');
    expect(loginComponentButton).toHaveTextContent('Sign up');
    expect(loginComponentSignupText).toHaveTextContent("Already have an account? Login");
});