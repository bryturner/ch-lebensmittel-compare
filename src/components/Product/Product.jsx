import { useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { UserListsContext } from "../../contexts/UserListsContext";
import FavoritesButton from "./ProductButtons/FavoritesButton";
import GroceryButton from "./ProductButtons/GroceryButton";
import ProductDivider from "../Utils/ProductDivider";
import CompareButton from "./ProductButtons/CompareButton";
import ProductDetail from "./ProductDetail";

const Container = styled.li`
   display: flex;
   padding: 0 1.6rem;
   gap: 1.4rem;
   align-items: center;

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      padding: 0 0.8rem;
      gap: 1rem;
   }
`;

const TextContainer = styled.div`
   flex: 5;
   display: flex;
   gap: 2rem;
   align-items: center;
`;

const TitleWrapper = styled.div`
   flex: 7;
   height: 100%;
   width: 100%;
`;

const Title = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
`;

const Link = styled.a`
   font-size: ${({ theme }) => theme.fontSize.mdLg};
   text-decoration: none;
   transition: all 0.1s linear;

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.smMd};
   }

   &:link {
      color: inherit;
   }

   &:visited {
      color: inherit;
   }

   &:hover {
      text-decoration: underline;
   }
`;

const DetailContainer = styled.div`
   min-width: 12.5rem;
   flex: 3;
   display: flex;
   gap: 1.8rem;

   @media (min-width: 1390px) {
      gap: 3rem;
   }
`;

const ButtonContainer = styled.div`
   display: flex;
   gap: 0.8rem;
`;

function Product({ product, dispatchFilter, listType, compareId }) {
   const [onFavoritesList, setOnFavoritesList] = useState(false);
   const [onGroceryList, setOnGroceryList] = useState(false);

   const productPrice = product.price.toFixed(2);
   const productIncrement = product.incrStr;
   const productTitle = product.title;
   const productLink = product.prodLink;

   const {
      groceryList,
      setGroceryList,
      favoritesList,
      setFavoritesList,
      setLocalStorageError,
   } = useContext(UserListsContext);

   const handleFavoriteClick = useCallback(
      (id) => {
         if (onFavoritesList) {
            setOnFavoritesList(false);
            const { [id]: product, ...newFavoritesList } = favoritesList;
            setFavoritesList(newFavoritesList);
         }
         if (!onFavoritesList) {
            setOnFavoritesList(true);
            setFavoritesList({ ...favoritesList, [id]: product });
         }
      },
      [favoritesList, onFavoritesList, product, setFavoritesList]
   );

   const handleGroceryListClick = useCallback(
      (id) => {
         if (onGroceryList) {
            setOnGroceryList(false);
            const { [id]: product, ...newGroceryList } = groceryList;
            setGroceryList(newGroceryList);
         }
         if (!onGroceryList) {
            setOnGroceryList(true);
            setGroceryList({ ...groceryList, [id]: product });
         }
      },
      [groceryList, onGroceryList, product, setGroceryList]
   );

   const checkOnUserFavoritesList = useCallback(() => {
      if (favoritesList[product._id]) {
         setOnFavoritesList(true);
      } else {
         setOnFavoritesList(false);
      }
   }, [favoritesList, setOnFavoritesList, product._id]);

   const checkOnGroceryList = useCallback(() => {
      if (groceryList[product._id]) {
         setOnGroceryList(true);
      } else {
         setOnGroceryList(false);
      }
   }, [groceryList, setOnGroceryList, product._id]);

   useEffect(() => {
      checkOnGroceryList();
   }, [checkOnGroceryList]);

   useEffect(() => {
      checkOnUserFavoritesList();
   }, [checkOnUserFavoritesList]);

   useEffect(() => {
      try {
         localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
      } catch (err) {
         console.error(err);
         setLocalStorageError(true);
      }
   }, [handleFavoriteClick, favoritesList]);

   useEffect(() => {
      try {
         localStorage.setItem("groceryList", JSON.stringify(groceryList));
      } catch (err) {
         console.error(err);
         setLocalStorageError(true);
      }
   }, [handleGroceryListClick, groceryList]);

   return (
      <>
         <Container>
            <ButtonContainer>
               <GroceryButton
                  product={product}
                  handleGroceryListClick={handleGroceryListClick}
                  onGroceryList={onGroceryList}
               />

               <FavoritesButton
                  product={product}
                  handleFavoriteClick={handleFavoriteClick}
                  onFavoritesList={onFavoritesList}
               />
            </ButtonContainer>

            <TextContainer>
               <TitleWrapper>
                  <Title data-testid="product-title">
                     <Link href={productLink} target="_blank">
                        {productTitle}
                     </Link>
                  </Title>
               </TitleWrapper>

               <DetailContainer>
                  <ProductDetail
                     detailText={productPrice}
                     detailTitle="Total"
                     detailType="price"
                  />

                  <ProductDetail
                     detailText={productIncrement}
                     detailTitle="Price/unit"
                     detailType="increment"
                  />
               </DetailContainer>
            </TextContainer>
            <CompareButton
               listType={listType}
               product={product}
               dispatchFilter={dispatchFilter}
               compareId={compareId}
            />
         </Container>
         <ProductDivider listType={listType} />
      </>
   );
}

export default Product;
