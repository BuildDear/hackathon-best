// Updated home.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('#MilitaryHelp')).toBeInTheDocument();
    expect(screen.getByText(/Ми - компанія, що спеціалізується/)).toBeInTheDocument();
    const learnMoreLinks = screen.getAllByRole('link', { name: 'Дізнатися більше' });
    expect(learnMoreLinks.length).toBe(3);

    // Ensure that the Slider component is being rendered
    // You should check for actual content rendered by the Slider component.
    // For example, if "Person One" is a name used in the slides:
  });
});
