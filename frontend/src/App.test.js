import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import App from "./App.js";

test("should header show the title", () => {
    render(<App />);
    const heading = screen.getByText(/todo list/i);
    expect(heading).toBeInTheDocument();
})
