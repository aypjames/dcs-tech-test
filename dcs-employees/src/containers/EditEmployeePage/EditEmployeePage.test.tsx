import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EditEmployeePage from "./EditEmployeePage";

describe("EditEmployeePage Render Testing", () => {
  it("should display a link and title", async () => {
    render(
      <MemoryRouter>
        <EditEmployeePage />
      </MemoryRouter>
    );

    const pageLink = screen.getByRole("link");
    expect(pageLink).toHaveTextContent("< Back");

    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toHaveTextContent("Employee details");
  });
});
