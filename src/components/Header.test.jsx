import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header.jsx';

describe('Header', () => {
  it('renders the logo image with an alt text', () => {
    render(<Header />);
    expect(screen.getByAltText('Fox logo')).toBeInTheDocument();
  });

  it('renders the app title', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /React Social App/i })).toBeInTheDocument();
  });
});
