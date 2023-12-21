import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

test("Greet renders correctly", () => {
  render(<Hello />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});
