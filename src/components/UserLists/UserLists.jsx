import { useContext } from "react";
import styled from "styled-components";
import { ERROR_MSG } from "../../constants/GlobalVariables";
import { UserListsContext } from "../../contexts/UserListsContext";
import ErrorMessage from "../Error/ErrorMessage";
import UserList from "./UserList";
import UserListButton from "./UserListButton";

const Container = styled.div`
   padding: 0 4rem;
   margin-bottom: 3rem;

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      padding: 0 2rem;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileM}) {
      padding: 0 1rem;
   }
`;

const UserListsContainer = styled.div`
   display: flex;
   gap: 1rem;

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      flex-direction: column;
   }
`;

const ListContainer = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

const ButtonContainer = styled.div`
   align-self: center;
   display: flex;
   gap: 3rem;
`;

const UserLists = () => {
   const {
      groceryList,
      setGroceryList,
      favoritesList,
      setFavoritesList,
      localStorageError,
      setLocalStorageError,
   } = useContext(UserListsContext);

   const handleClearGroceryClick = () => {
      try {
         localStorage.removeItem("groceryList");
         setGroceryList({});
      } catch (err) {
         console.error(err);
         setLocalStorageError(ERROR_MSG.GROC_LOCAL_REMOVE);
      }
   };

   const handleClearFavoritesClick = () => {
      try {
         localStorage.removeItem("favoritesList");
         setFavoritesList({});
      } catch (err) {
         console.error(err);
         setLocalStorageError(ERROR_MSG.FAV_LOCAL_REMOVE);
      }
   };

   return (
      <Container>
         {/* <ErrorMessage errorMsg={localStorageError} /> */}
         <UserListsContainer>
            <ListContainer>
               <UserList
                  listHeading="My Grocery List"
                  listText="Click the plus icon to add to your grocery list"
                  userList={groceryList}
               />
               <ButtonContainer>
                  {/* <UserListButton buttonText="Share grocery list" /> */}
                  <UserListButton
                     handleClick={handleClearGroceryClick}
                     buttonText="Clear grocery list"
                  />
               </ButtonContainer>
            </ListContainer>
            <ListContainer>
               <UserList
                  listHeading="My Favorites List"
                  listText="Click the heart icon to add to your favorites list"
                  userList={favoritesList}
               />
               <ButtonContainer>
                  {/* <UserListButton buttonText="Share favorites list" /> */}
                  <UserListButton
                     handleClick={handleClearFavoritesClick}
                     buttonText="Clear favorites list"
                  />
               </ButtonContainer>
            </ListContainer>
         </UserListsContainer>
      </Container>
   );
};

export default UserLists;
