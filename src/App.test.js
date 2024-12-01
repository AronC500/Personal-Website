import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Software Engineer text", () => {
  render(<App />);
  const textElement = screen.getByText(/Software Engineer/i);
  expect(textElement).toBeInTheDocument();
});
