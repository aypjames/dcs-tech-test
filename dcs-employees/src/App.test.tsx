import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App /> Setup Testing", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    expect(screen.getByText(/Employees' list/i)).toBeInTheDocument();

    // // Get by h1
    // const p = wrapper.container.querySelector("p");
    // expect(p?.textContent).toBe(
    //   "Please click on 'Edit' to find more details of each employee"
    // );

    // // Get by text using the React testing library
    // const text = screen.getByText(
    //   /Click on the Vite and React logos to learn more/i
    // );
    // expect(text.textContent).toBeTruthy();
  });
});
