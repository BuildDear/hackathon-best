import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';

describe('Login Component', () => {
  it('handles form submission', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Пароль:');
    const submitButton = screen.getByRole('button', { name: 'Увійти' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Mock the console.log to check if it gets called with correct data
    const consoleSpy = jest.spyOn(console, 'log');
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith('Login Data Submitted:', {
      email: 'test@example.com',
      password: 'password123'
    });

    consoleSpy.mockRestore();  // Clean up the spy
  });
});
