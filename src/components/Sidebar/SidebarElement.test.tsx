import { render, screen } from "@testing-library/react";
import { SidebarElement } from "./SidebarElement";

describe("SidebarElement", () => {
  test("should display provided node with tooltip", () => {
    const icon = <div>icon</div>;
    render(<SidebarElement icon={icon} text="tooltip" />);

    expect(screen.getByRole("listitem")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
    expect(screen.getByText("tooltip")).toBeInTheDocument();
  });
});
