import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateGameComponent from '../../Components/CreateGameComponent';

afterEach(() => {
    cleanup();
});

test('Should render create game component', () => {
    render(
        <Router>
            <CreateGameComponent />
        </Router>
    );

        // Elements
        const createGameComponentSignup = screen.getByTestId('createGameComponent-name');
        const createGameComponentNamePassword = screen.getByTestId('createGameComponent-password');
        const createGameComponentButton = screen.getByTestId('createGameComponent-button');

        expect(createGameComponentSignup).toHaveTextContent('Game Name:');
        expect(createGameComponentNamePassword).toHaveTextContent('Password:');
        expect(createGameComponentButton).toHaveTextContent('Create Game');
        expect(createGameComponentButton).toBeEnabled();
});

test('Can edit create game text inputs and press button', () => {
    const nameInput = "test game";
    const passwordInput = "testpass";

    render(
        <Router>
            <CreateGameComponent />
        </Router>
    );

        // Elements
        const createGameComponentNameInput = screen.getByTestId('createGameComponent-nameInput');
        const createGameComponentPasswordInput = screen.getByTestId('createGameComponent-passwordInput');
        const createGameComponentButton = screen.getByTestId('createGameComponent-button');

        fireEvent.change(createGameComponentNameInput,{target: {value: nameInput}})
        fireEvent.change(createGameComponentPasswordInput,{target: {value: passwordInput}})
        fireEvent.click(createGameComponentButton)

        expect(createGameComponentNameInput.value).toBe('test game')
        expect(createGameComponentPasswordInput.value).toBe('testpass')
        expect(createGameComponentButton).toBeEnabled();
});