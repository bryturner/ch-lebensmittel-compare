import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "../Product";

import { testProductVeggie } from "../../../__mocks__/testProductVeggie";
import { testProductMeat } from "../../../__mocks__/testProductMeat";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../constants/Theme";
import { UserListsContext } from "../../../contexts/UserListsContext";

const mockedDispatchFilter = jest.fn();
const mockedSetFavoritesList = jest.fn();
const mockedSetGroceryList = jest.fn();
const mockedSetLocalStorageError = jest.fn();

const MockProduct = ({
  product,
  dispatchFilter,
  listType,
  groceryList,
  favoritesList,
  localStorageError,
}) => {
  return (
    <ThemeProvider theme={theme}>
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
        <Product
          product={product}
          dispatchFilter={dispatchFilter}
          listType={listType}
        />
      </UserListsContext.Provider>
    </ThemeProvider>
  );
};

describe("Product and product text content", () => {
  test("should render product", () => {
    render(
      <MockProduct
        product={testProductVeggie}
        dispatchFilter={mockedDispatchFilter}
        listType="userList"
        groceryList={{}}
        favoritesList={{}}
        localStorageError={false}
      />
    );
    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  //   test("should render product title 'Gurke'", () => {
  //     render(
  //       <MockProduct
  //         product={testProductVeggie}
  //         user={testUser1}
  //         favoritesList={[]}
  //         setFavoritesList={mockedFavorites}
  //         groceryList={[]}
  //         setGroceryList={mockedGroceryList}
  //         selectedProduct={undefined}
  //         setSelectedProduct={mockedSelectedProduct}
  //       />
  //     );
  //     expect(screen.getByTestId("product-title").textContent).toBe("Gurke");
  //   });

  //   test("should render product increment measurement as '1.70/1ST'", () => {
  //     render(
  //       <MockProduct
  //         product={testProductVeggie}
  //         user={testUser1}
  //         favoritesList={[]}
  //         setFavoritesList={mockedFavorites}
  //         groceryList={[]}
  //         setGroceryList={mockedGroceryList}
  //         selectedProduct={undefined}
  //         setSelectedProduct={mockedSelectedProduct}
  //       />
  //     );
  //     expect(screen.getByTestId("product-increment").textContent).toBe(
  //       "1.70/1ST"
  //     );
  //   });

  //   test("should render product price as '1.70'", () => {
  //     render(
  //       <MockProduct
  //         product={testProductVeggie}
  //         user={testUser1}
  //         favoritesList={[]}
  //         setFavoritesList={mockedFavorites}
  //         groceryList={[]}
  //         setGroceryList={mockedGroceryList}
  //         selectedProduct={undefined}
  //         setSelectedProduct={mockedSelectedProduct}
  //       />
  //     );
  //     expect(screen.getByTestId("product-price").textContent).toBe("1.70");
  //   });
});

// describe("Product displaying correct icons", () => {
//   test("should render product with favorites icon filled **testUser1**", () => {
//     render(
//       <MockProduct
//         product={testProductVeggie}
//         user={testUser1}
//         favoritesList={testUser1.lists.favorites}
//         setFavoritesList={mockedFavorites}
//         groceryList={[]}
//         setGroceryList={mockedGroceryList}
//         selectedProduct={undefined}
//         setSelectedProduct={mockedSelectedProduct}
//       />
//     );
//     expect(screen.getByTestId("FavoriteIcon")).toBeInTheDocument();
//   });

//   test("should render product with remove icon **testUser1**", () => {
//     render(
//       <MockProduct
//         product={testProductMeat}
//         user={testUser1}
//         favoritesList={[]}
//         setFavoritesList={mockedFavorites}
//         groceryList={testUser1.lists.grocList}
//         setGroceryList={mockedGroceryList}
//         selectedProduct={undefined}
//         setSelectedProduct={mockedSelectedProduct}
//       />
//     );
//     expect(screen.getByTestId("RemoveIcon")).toBeInTheDocument();
//   });

//   test("should render product with favorites icon filled **userEmptyLists**", () => {
//     render(
//       <MockProduct
//         product={testProductVeggie}
//         user={userEmptyLists}
//         favoritesList={userEmptyLists.lists.favorites}
//         setFavoritesList={mockedFavorites}
//         groceryList={[]}
//         setGroceryList={mockedGroceryList}
//         selectedProduct={undefined}
//         setSelectedProduct={mockedSelectedProduct}
//       />
//     );
//     expect(
//       screen.getByTestId("FavoriteBorderOutlinedIcon")
//     ).toBeInTheDocument();
//   });

//   test("should render product with add icon **userEmptyLists**", () => {
//     render(
//       <MockProduct
//         product={testProductVeggie}
//         user={userEmptyLists}
//         favoritesList={[]}
//         setFavoritesList={mockedFavorites}
//         groceryList={userEmptyLists.lists.grocList}
//         setGroceryList={mockedGroceryList}
//         selectedProduct={undefined}
//         setSelectedProduct={mockedSelectedProduct}
//       />
//     );
//     expect(screen.getByTestId("AddIcon")).toBeInTheDocument();
//   });
// });
