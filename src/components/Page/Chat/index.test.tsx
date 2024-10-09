import { render, screen } from "@testing-library/react";

import Chat from ".";

describe("Chat", () => {
  test("renders", async () => {
    render(<Chat />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
