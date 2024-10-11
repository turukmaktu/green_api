import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

test('test app', async () => {
  render(<App />);

  // test set id instance
  const idInstanceInput = screen.getByTestId('id_instance');
  const idInstance = process.env?.REACT_APP_GREEN_API_TEST_ID_INSTANCE || '';
  expect(idInstanceInput).toBeInTheDocument();
  await userEvent.type(idInstanceInput, idInstance);
  await waitFor(() => {
    expect(idInstanceInput).toHaveValue(idInstance);
  });

  // test set api_token
  const apiTokenInstanceInput = screen.getByTestId('api_token_instance');
  const apiTokenInstance = process.env?.REACT_APP_GREEN_API_TEST_API_TOKEN_INSTANCE || '';
  await userEvent.type(apiTokenInstanceInput, apiTokenInstance);
  await waitFor(() => {
    expect(apiTokenInstanceInput).toHaveValue(apiTokenInstance);
  });

  const outputResultInput = screen.getByTestId('green_api_output');

  // test get settings button
  const actionGetSettingsInput = screen.getByTestId('actions_get_settings_button');
  await userEvent.click(actionGetSettingsInput);

  await setTimeout(async () => {
    await waitFor(() => {
      expect(outputResultInput).toHaveValue('wid');
    });
  }, 2000);


  // test get instance button
  const actionGetStateInstance = screen.getByTestId('actions_get_state_instance_button');
  await userEvent.click(actionGetStateInstance);

  await setTimeout(async () => {
    await waitFor(() => {
      expect(outputResultInput).toHaveValue('stateInstance');
    });
  });

});
