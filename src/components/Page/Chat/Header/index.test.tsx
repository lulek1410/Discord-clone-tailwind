import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  test("renders", async () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
});
