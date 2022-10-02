import "@testing-library/jest-dom";
import { render } from "../../../testUtils";
import UserList from "../UserList";

describe("UserList", () => {
  test("should render user list", () => {
    const { getByRole } = render(
      <UserList
        userList={{}}
        listHeading="My Grocery List"
        listText="Click the plus to add to grocery list"
      />
    );

    expect(getByRole("list")).toBeInTheDocument();
  });
});

// test("should render empty grocery list text", () => {
//   render(
//     <MockUserList
//       userList={userEmptyLists.lists.grocList}
//       listTitle="Grocery"
//       listText="Click the plus to add to grocery list"
//       storeNames={storeNames}
//       favoritesList={userEmptyLists.lists.grocList}
//       setFavoritesList={mockedFavorites}
//       groceryList={userEmptyLists.lists.grocList}
//       setGroceryList={mockedGroceryList}
//       handleClearClick={mockedHandleClearClick}
//       clearButtonName="Clear grocery list"
//     />
//   );

//   expect(
//     screen.getByText(/click the plus to add to grocery list/i).textContent
//   ).toBe("Click the plus to add to grocery list");
// });
