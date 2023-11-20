import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react"
import App from "../src/components/App.tsx";

test("Rendering of the App component", () => {
  render(<App />);

  const element = screen.getByText("Hello React world!");

  expect(element).toBeInTheDocument();
});