import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

// Mock the db module
jest.mock('@/lib/db', () => ({
  auth: {
    getCurrentUser: jest.fn().mockResolvedValue(null),
    login: jest.fn(),
    logout: jest.fn(),
  },
}));

describe('Home Page', () => {
  it('renders login form when user is not logged in', async () => {
    render(<Home />);

    // First the loading state should be shown
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the login form to be displayed
    expect(
      await screen.findByRole('heading', { name: 'Login' })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
