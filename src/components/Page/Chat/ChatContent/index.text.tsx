import { render, screen } from "@testing-library/react";

import ChatContent from ".";

describe("ChatContent", () => {
  test("renders", async () => {
    render(<ChatContent />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
