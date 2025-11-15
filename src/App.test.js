import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SuperClean header', () => {
  render(<App />);
  const headerElement = screen.getByText(/A TRADITION OF/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders contact information', () => {
  render(<App />);
  const phoneElement = screen.getByText(/\+919345044366/i);
  expect(phoneElement).toBeInTheDocument();
});

test('renders Tradition of Trust heading', () => {
  render(<App />);
  const heading = screen.getByText(/Tradition of Trust/i);
  expect(heading).toBeInTheDocument();
});
