import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';



test('should return initial color of button', async () => {
  render(<App />);
  const initialInput = await screen.findByPlaceholderText("name");
  const initialResult = await screen.findByTestId("result");
  expect(initialInput.value).toBe("");
  fireEvent.change(initialInput, {target:{value:"test"}});
  expect(initialInput.value).toBe("test");
  expect(initialResult).toHaveTextContent(/none/i);
  fireEvent.change(initialInput, {target:{value:"James"}});
  expect(initialInput.value).toBe("James");
  expect(initialResult).toHaveTextContent(/James/i);
});
