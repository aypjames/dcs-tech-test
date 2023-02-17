import { render, screen, waitFor } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NewEmployeePage from "./NewEmployeePage";
import AllEmployeesPage from "../AllEmployeesPage/AllEmployeesPage";
import Employee from "../../components/Employee/Employee";

describe("NewEmployeePage Render Testing", () => {
  it("should display a link and title", () => {
    render(
      <MemoryRouter>
        <NewEmployeePage />
      </MemoryRouter>
    );

    const pageLink = screen.getByRole("link");
    expect(pageLink).toHaveTextContent("< Back");

    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toHaveTextContent("Register new employee");
  });

  it("Should navigate to the Employees' List page when < back is clicked", async () => {
    const homePageTitle = { text: "Employees' list" };
    const routes = [
      {
        path: "/employees",
        element: <AllEmployeesPage />,
        loader: () => homePageTitle,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/employees/create", "/employees"],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    await waitFor(
      () => expect(screen.getByText("Employees' list")).toBeInTheDocument
    );
  });
});
