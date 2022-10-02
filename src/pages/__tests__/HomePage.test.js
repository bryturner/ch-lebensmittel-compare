import { render } from "../../testUtils";
import "@testing-library/jest-dom";
import HomePage from "../HomePage";

describe("Homepage", () => {
  test("should only show products with high comparison match", () => {
    const { getByText } = render(<HomePage />);

    expect(getByText(/compare groceries in switzerland/i)).toBeInTheDocument();
  });

  //   test("should only show products with high comparison match", () => {
  // 	render(<HomePage />);
  // 	userEvent.selectOptions(
  // 	  screen.getByRole("combobox"),
  // 	  screen.getByRole("option", { name: "Fleisch & Fisch" })
  // 	);
  // 	expect(screen.getByTestId("product-15")).toBeInTheDocument();
  //  });
});
