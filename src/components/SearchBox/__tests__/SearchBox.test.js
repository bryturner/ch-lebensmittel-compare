import "@testing-library/jest-dom";
import { render } from "../../../testUtils";
import SearchBox from "../SearchBox";

const mockedDispatchFilter = jest.fn();

describe("SearchBox", () => {
  test("should render search box", () => {
    const { getByRole } = render(
      <SearchBox state={""} dispatchFilter={mockedDispatchFilter} />
    );

    expect(getByRole("searchbox")).toBeInTheDocument();
  });

  //   test("should be able to enter search info by typing", () => {
  //     render(<MockSearchBox state={""} dispatchFilter={mockedDispatchFilter} />);

  //     const inputElement = screen.getByRole("searchbox");
  //     fireEvent.click(inputElement);
  //     fireEvent.change(inputElement, { target: { value: "Banana" } });
  //     expect(inputElement.value).toBe("Banana");
  //   });
});
