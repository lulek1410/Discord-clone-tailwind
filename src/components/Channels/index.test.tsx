import { render, screen } from "@testing-library/react";
import Channels from ".";

describe("Channel", () => {
  test("renders", () => {
    render(<Channels />);
    expect(screen.getByText("Channels")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(3);
  });
});
