import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar.jsx';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Profile' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Messages' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Music' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Settings' })).toBeInTheDocument();
  });

  it('marks the active link with the active class', () => {
    render(
      <MemoryRouter initialEntries={['/news']}>
        <Navbar />
      </MemoryRouter>,
    );

    const newsLink = screen.getByRole('link', { name: 'News' });
    expect(newsLink.className).toContain('nav__link--active');
  });
});
