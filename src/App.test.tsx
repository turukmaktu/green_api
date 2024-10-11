import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('test app', async () => {
  render(<App />);

  const idInstanceInput = screen.getByTestId('id_instance');
  const idInstance = process.env?.GREEN_API_TEST_ID_INSTANCE || '';
  expect(idInstanceInput).toBeInTheDocument();
  await userEvent.type(idInstanceInput, idInstance);
  await waitFor(() => expect(idInstanceInput).toHaveValue(idInstance));
});
