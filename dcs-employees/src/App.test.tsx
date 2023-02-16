import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App /> Setup Testing", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
