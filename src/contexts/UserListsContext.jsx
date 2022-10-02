import React, { createContext, useEffect, useState } from "react";
import { ERROR_MSG } from "../constants/GlobalVariables";

const UserListsContext = createContext();

function UserListsContextProvider({ children }) {
  const [favoritesList, setFavoritesList] = useState({});
  const [groceryList, setGroceryList] = useState({});
  const [localStorageError, setLocalStorageError] = useState("");

  const getGroceryList = () => {
    try {
      const groceryListData = JSON.parse(localStorage.getItem("groceryList"));
      if (!groceryListData) return;
      setGroceryList(groceryListData);
    } catch (err) {
      console.error(err);
      setLocalStorageError(ERROR_MSG.LOCAL_STORAGE);
    }
  };

  const getFavoritesList = () => {
    try {
      const favoritesListData = JSON.parse(
        localStorage.getItem("favoritesList")
      );
      if (!favoritesListData) return;
      setFavoritesList(favoritesListData);
    } catch (err) {
      console.error(err);
      setLocalStorageError(ERROR_MSG.LOCAL_STORAGE);
    }
  };

  useEffect(() => {
    getGroceryList();
    getFavoritesList();
  }, []);
  return (
    <UserListsContext.Provider
      value={{
        groceryList,
        setGroceryList,
        favoritesList,
        setFavoritesList,
        localStorageError,
        setLocalStorageError,
      }}
    >
      {children}
    </UserListsContext.Provider>
  );
}

export { UserListsContextProvider, UserListsContext };
