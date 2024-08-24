import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionsPage from './TransactionPage';

test('renders learn react link', () => {
  render(<TransactionsPage />);
  const linkElement = screen.getByText(/transactions/i);
  expect(linkElement).toBeInTheDocument();
});
