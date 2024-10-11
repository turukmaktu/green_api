import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test app', async () => {
  render(<App />);
  const linkElement = screen.getByText(/todo create credentials input/i);
  expect(linkElement).toBeInTheDocument();
});
