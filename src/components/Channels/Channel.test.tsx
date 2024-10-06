import { render, screen } from "@testing-library/react";
import Channel from "./Channel";

describe("Channel", () => {
  test("renders", () => {
    render(<Channel text="Channel name" subChannels={[]} />);
    expect(screen.getByText("Channel name")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
