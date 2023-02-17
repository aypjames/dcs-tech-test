import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllEmployeesPage from "./AllEmployeesPage";

describe("AllEmployeesPage Render Testing", () => {
  it("should display title, paragraph, and a button, title, and the form", async () => {
    render(
      <MemoryRouter>
        <AllEmployeesPage />
      </MemoryRouter>
    );

    await waitFor(() => {
      const pageTitle = screen.getByRole("heading", { level: 1 });
      expect(pageTitle).toHaveTextContent("Employees' list");

      const pagePara = screen.getByText(
        "Please click on 'Edit' to find more details of each employee"
      );
      expect(pagePara).toBeInTheDocument;

      const pageBtn = screen.getByRole("button");
      expect(pageBtn).toBeInTheDocument;
    });
  });
});
