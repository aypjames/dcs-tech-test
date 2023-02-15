import { describe, test, expect } from "vitest";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Employee from "./Employee";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("<Employee /> Testing", () => {
  test("Clicking edit going to the edit page", () => {
    const wrapper = render(<Employee />, { wrapper: BrowserRouter });
    expect(wrapper).toBeTruthy();

    expect(screen.getByText("Edit")).toBeInTheDocument();

    const user = userEvent.setup();
    const edit = vi.spyOn(user, "click");
    const editLink = screen.getByText(/Edit/i);

    user.click(editLink);
    expect(edit).toHaveBeenCalledTimes(1);
  });
});
