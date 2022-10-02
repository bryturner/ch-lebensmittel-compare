import "@testing-library/jest-dom";
import StoreList from "../StoreList";
import { testProducts } from "../../../__mocks__/testProductsList";

import { UserListsContext } from "../../../contexts/UserListsContext";
import { render } from "../../../testUtils";

const mockedDispatchFilter = jest.fn();
const mockedSetGroceryList = jest.fn();
const mockedSetFavoritesList = jest.fn();
const mockedSetLocalStorageError = jest.fn();

const MockStoreList = ({
  storeTitle,
  products,
  dispatchFilter,
  loading,
  key,
}) => {
  const groceryList = {};
  const favoritesList = {};
  const localStorageError = false;

  return (
    <UserListsContext.Provider
      value={{
        groceryList,
        mockedSetGroceryList,
        favoritesList,
        mockedSetFavoritesList,
        localStorageError,
        mockedSetLocalStorageError,
      }}
    >
      <StoreList
        storeTitle={storeTitle}
        products={products}
        dispatchFilter={dispatchFilter}
        loading={loading}
        key={key}
      />
    </UserListsContext.Provider>
  );
};

describe("StoreList", () => {
  test("should render store name", () => {
    const { getByText } = render(
      <MockStoreList
        storeTitle="Coop"
        products={testProducts}
        dispatchFilter={mockedDispatchFilter}
        loading={false}
        key="Coop"
      />
    );

    expect(getByText(/coop/i)).toBeInTheDocument();
  });
});
