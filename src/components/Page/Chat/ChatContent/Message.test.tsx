import { render, screen } from "@testing-library/react";

import Message from "./Message";

describe("Message", () => {
  test("renders", async () => {
    render(
      <Message
        avatarSrc="source"
        message="test message text"
        authorName="author name"
        timestamp="22.10.2024 11:24"
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("test message text")).toBeInTheDocument();
    expect(screen.getByText("author name")).toBeInTheDocument();
    expect(screen.getByText("22.10.2024 11:24")).toBeInTheDocument();
  });
});
