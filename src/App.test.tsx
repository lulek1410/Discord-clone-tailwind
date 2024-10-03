import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders navigation", async () => {
    render(<App/>);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});