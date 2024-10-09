import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchButton from "./SearchButton";
import { useState } from "react";

describe("SearchButton", () => {
  test("renders", async () => {
    let value = "";
    const onChangeMock = jest.fn((newVal: string) => (value = newVal));
    const searchMock = jest.fn();
    render(
      <SearchButton
        value={value}
        onChange={onChangeMock}
        searchAction={searchMock}
      />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("updates value on input", async () => {
    let valueSpy = "";
    const onChangeMock = jest.fn((newVal: string) => (valueSpy = newVal));
    const searchMock = jest.fn();

    const SearchButtonWrapper = () => {
      const [value, setValue] = useState(""); // Actual state

      return (
        <SearchButton
          value={value}
          onChange={(val) => {
            onChangeMock(val);
            setValue(val);
          }}
          searchAction={searchMock}
        />
      );
    };
    render(<SearchButtonWrapper />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    const testValue = "test";
    await userEvent.type(input, testValue);
    expect(onChangeMock).toHaveBeenCalledTimes(testValue.length);
    expect(onChangeMock).toHaveBeenCalledWith("t");
    expect(onChangeMock).toHaveBeenCalledWith("te");
    expect(onChangeMock).toHaveBeenCalledWith("tes");
    expect(onChangeMock).toHaveBeenCalledWith("test");
    expect(valueSpy).toBe(testValue);
  });
});
