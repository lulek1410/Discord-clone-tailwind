import { fireEvent, render, screen } from "@testing-library/react";
import Channel from "./Channel";

describe("Channel", () => {
  test("renders", () => {
    render(<Channel text="Channel name" subChannels={[]} />);
    expect(screen.getByText("Channel name")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("open sub channels when channel clicked", () => {
    render(
      <Channel
        text="test"
        subChannels={[{ text: "subChannel1" }, { text: "subChannel2" }]}
      />
    );
    const channel = screen.getByRole("button");
    expect(channel).toBeInTheDocument();
    fireEvent.click(channel);
    expect(screen.getByText("subChannel1")).toBeInTheDocument();
    expect(screen.getByText("subChannel2")).toBeInTheDocument();
  });
});
