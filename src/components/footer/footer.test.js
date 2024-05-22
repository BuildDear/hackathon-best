import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer';

describe('Footer Component', () => {
  it('renders footer with social media icons and navigation links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Перевірка наявності іконок соцмереж
    expect(screen.getByAltText('Tiktok')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
    expect(screen.getByAltText('Telegram')).toBeInTheDocument();
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter')).toBeInTheDocument();

    // Перевірка наявності навігаційних посилань
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
  });
});
