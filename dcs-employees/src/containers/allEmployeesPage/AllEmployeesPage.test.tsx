import { describe, test, expect } from "vitest";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import AllEmployeesPage from "./AllEmployeesPage";
import { BrowserRouter } from "react-router-dom";

describe("<App /> Setup Testing", () => {
  test("App mounts properly", () => {
    const wrapper = render(<AllEmployeesPage />);
    expect(wrapper).toBeTruthy();

    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
  it("Click the button", () => {
    const wrapper = render(<AllEmployeesPage />);
    const button = wrapper.container.querySelector(
      "button"
    ) as HTMLButtonElement;

    // button mounts with count in 0
    expect(button.textContent).toBe("count is 0");
  });
});
