import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NewEmployeePage from "./NewEmployeePage";

describe("NewEmployeePage", () => {
  it("The page should load and display the title", () => {
    render(<Card NewEmployeePage />);
    const title = screen.getByText(/Register new employee/i);
    expect(title).toBeInTheDocument();
  });

  //   it("should contain a button", () => {
  //     render(<Card title="foo" />);
  //     const button = screen.getByRole("button");
  //     expect(button).toBeInTheDocument();
  //   });

  //   it("should not display content by default", () => {
  //     render(<Card title="Test title" content="Some content" />);
  //     const content = screen.queryByText(/some content/i);
  //     expect(content).not.toBeInTheDocument();
  //   });

  //   it("should display additional content once the button is clicked", async () => {
  //     const user = userEvent.setup();
  //     render(<Card title="Test title" content="Some content" />);
  //     const button = screen.getByRole("button");
  //     await user.click(button);
  //     const content = screen.queryByText(/some content/i);
  //     expect(content).toBeInTheDocument();
  //   });

  //   it("should toggle the content on multiple clicks", async () => {
  //     const user = userEvent.setup();
  //     render(<Card title="Test title" content="Some content" />);
  //     const button = screen.getByRole("button");
  //     await user.click(button);
  //     const content = screen.queryByText(/some content/i);
  //     expect(content).toBeInTheDocument();
  //     await user.click(button);
  //     expect(content).not.toBeInTheDocument();
  //   });

  //   it("should change button text on click", async () => {
  //     const user = userEvent.setup();
  //     render(<Card title="Test title" content="Some content" />);
  //     const button = screen.getByRole("button");
  //     expect(button.innerHTML).toBe("Show More");
  //     await user.click(button);
  //     expect(button.innerHTML).toBe("Show Less");
  //   });
});
