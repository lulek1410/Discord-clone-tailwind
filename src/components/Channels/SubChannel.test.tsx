import { render, screen } from "@testing-library/react";
import SubChannel from "./SubChannel";

describe("Channel", () => {
  test("renders", () => {
    render(<SubChannel text="test channel" />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("test channel")).toBeInTheDocument();
  });
});
