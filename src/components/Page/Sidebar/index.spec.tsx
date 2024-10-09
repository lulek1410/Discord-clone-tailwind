import { render, screen } from "@testing-library/react";

import Sidebar from "./index";

describe("Sidebar", () => {
  test("renders navigation", async () => {
    render(<Sidebar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });
});
