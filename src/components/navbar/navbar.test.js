import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Перевірка наявності тексту посилань
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Sing In')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();

    // Перевірка чи зображення логотипу рендериться з правильним alt текстом
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Перевірка атрибутів href у посилань
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Contact Us').closest('a')).toHaveAttribute('href', '/ContactUs');
    expect(screen.getByText('Gallery').closest('a')).toHaveAttribute('href', '/Gallery');
    expect(screen.getByText('Courses').closest('a')).toHaveAttribute('href', '/Course');
  });
});
