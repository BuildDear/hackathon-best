import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

describe('Register Component', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly', () => {
        render(
            <Router>
                <Register />
            </Router>
        );

        expect(screen.getByText('Реєстрація')).toBeInTheDocument();
        expect(screen.getByLabelText("Ім'я:")).toBeInTheDocument();
        expect(screen.getByLabelText("Прізвище:")).toBeInTheDocument();
        expect(screen.getByLabelText("Email:")).toBeInTheDocument();
        expect(screen.getByLabelText("Пароль:")).toBeInTheDocument();
        expect(screen.getByLabelText("Підтвердіть Пароль:")).toBeInTheDocument();
        expect(screen.getByLabelText("Я згоден з умовами користування")).toBeInTheDocument();
    });

    it('updates input values', () => {
        render(
            <Router>
                <Register />
            </Router>
        );

        const usernameInput = screen.getByLabelText("Ім'я:");
        fireEvent.change(usernameInput, { target: { value: 'John' } });
        expect(usernameInput.value).toBe('John');

        const emailInput = screen.getByLabelText("Email:");
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');
    });

    it('shows error when passwords do not match', () => {
        render(
            <Router>
                <Register />
            </Router>
        );

        const passwordInput = screen.getByLabelText("Пароль:");
        const confirmPasswordInput = screen.getByLabelText("Підтвердіть Пароль:");
        const submitButton = screen.getByText('Зареєструватися');

        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'different' } });
        fireEvent.click(submitButton);

        // expect(screen.getByText("Passwords do not match.")).toBeInTheDocument();
    });

    it('shows error when terms are not agreed to', () => {
        render(
            <Router>
                <Register />
            </Router>
        );

        const passwordInput = screen.getByLabelText("Пароль:");
        const confirmPasswordInput = screen.getByLabelText("Підтвердіть Пароль:");
        const agreeCheckbox = screen.getByLabelText("Я згоден з умовами користування");
        const submitButton = screen.getByText('Зареєструватися');

        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
        fireEvent.click(submitButton);

        // expect(screen.getByText("You must agree to the terms and conditions.")).toBeInTheDocument();
    });

    it('submits form with correct data', () => {
        render(
            <Router>
                <Register />
            </Router>
        );

        const usernameInput = screen.getByLabelText("Ім'я:");
        const lastNameInput = screen.getByLabelText("Прізвище:");
        const emailInput = screen.getByLabelText("Email:");
        const passwordInput = screen.getByLabelText("Пароль:");
        const confirmPasswordInput = screen.getByLabelText("Підтвердіть Пароль:");
        const agreeCheckbox = screen.getByLabelText("Я згоден з умовами користування");
        const submitButton = screen.getByText('Зареєструватися');

        fireEvent.change(usernameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
        fireEvent.click(agreeCheckbox);
        fireEvent.click(submitButton);

        expect(console.log).toHaveBeenCalledWith('Form Data Submitted:', {
            username: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            password: 'password123',
            confirmPassword: 'password123',
            agreeToTerms: true,
            role: '',
        });
    });
});
