import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title Fast Finger ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fast Fingers/i);
  expect(linkElement).toBeInTheDocument();
});
