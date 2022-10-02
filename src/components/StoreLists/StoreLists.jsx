import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
import StoreList from "./StoreList";
import { $storeTitles } from "../../constants/GlobalVariables";
import { useFilterReducer } from "../../customHooks/useFilterReducer";

const Container = styled.div`
   padding: 0 4rem;
   margin-bottom: 2rem;

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      padding: 0 2rem;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileM}) {
      padding: 0 1rem;
   }
`;

const UpperContainer = styled.div`
   width: 100%;
   padding: 2rem;
   background-color: rgba(255, 255, 255, 0.8);
   margin-bottom: 1rem;
   border-radius: 5px;
`;

const Text = styled.p`
   text-align: center;
   font-size: ${({ theme }) => theme.fontSize.lg};
   color: ${({ theme }) => theme.color.darkGray};
   text-decoration: underline;
   margin-bottom: 2.6rem;

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      font-size: ${({ theme }) => theme.fontSize.mdLg};
   }
`;

const InputsContainer = styled.div`
   display: flex;
   justify-content: center;
   gap: 2rem;

   @media (max-width: ${({ theme }) => theme.screenSize.mobileS}) {
      flex-direction: column;
   }
`;

const LowerContainer = styled.div`
   display: flex;
   gap: 1rem;

   @media (max-width: 912px) {
      flex-direction: column;
   }
`;

const StoreLists = () => {
   const [products, setProducts] = useState([]);
   const [category, setCategory] = useState("fruechte-gemuese");
   const [loading, setLoading] = useState(false);

   const [state, dispatchFilter] = useFilterReducer({ products: products });

   const fetchTestData = () => {
      fetch("productData.json")
         .then((response) => response.json())
         .then((data) => {
            setProducts(data.categories[category]);
         })
         .catch((err) => {
            console.error(err);
         });
   };

   useEffect(() => {
      fetchTestData();
   }, [category]);

   useEffect(() => {
      dispatchFilter({
         type: "fetchProducts",
         payload: { products: products },
      });
   }, [products, dispatchFilter]);

   return (
      <Container>
         <UpperContainer>
            <Text>
               Use the compare buttons to find products with similar names
            </Text>

            <InputsContainer>
               <CategoryFilter category={category} setCategory={setCategory} />

               <SearchBox state={state} dispatchFilter={dispatchFilter} />
            </InputsContainer>
         </UpperContainer>

         <LowerContainer>
            {$storeTitles.map((storeTitle) => (
               <StoreList
                  storeTitle={storeTitle}
                  products={state.products}
                  compareId={state.compareId}
                  dispatchFilter={dispatchFilter}
                  loading={loading}
                  key={storeTitle}
               />
            ))}
         </LowerContainer>
      </Container>
   );
};

export default StoreLists;
