import styled from "styled-components";
import { LIST_TYPE } from "../../constants/GlobalVariables";
import Product from "../Product/Product";
import StoreListHeading from "./StoreListHeading";

const Container = styled.div`
   flex: 1;
   background-color: ${({ theme }) => theme.color.secondaryLight};
   border-radius: 8px;
   overflow: hidden;
`;

const ListContainer = styled.div`
   height: 40rem;
   overflow-y: ${(props) => (props.loading ? "hidden" : "scroll")};
   ::-webkit-scrollbar {
      display: none;
   }
   position: relative;
   border: 1px solid ${({ theme }) => theme.color.secondaryDark};
   border-top: none;
   border-bottom-left-radius: 8px;
   border-bottom-right-radius: 8px;

   @media (max-width: 912px) {
      height: 30rem;
   } ;
`;

const ProductList = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding-top: 1rem;
   filter: ${(props) => (props.loading ? "blur(3px)" : "none")};
   transition: all 0.1s linear;
`;

const Text = styled.p`
   text-align: center;
`;

function StoreList({
   storeTitle,
   products,
   dispatchFilter,
   loading,
   compareId,
}) {
   return (
      <Container storeTitle={storeTitle}>
         <StoreListHeading
            storeTitle={storeTitle}
            dispatchFilter={dispatchFilter}
            compareId={compareId}
         />
         <ListContainer>
            <ProductList>
               {products.length === 0 ? (
                  <Text>No products found in this store</Text>
               ) : (
                  products
                     .filter((product) => product.storeTitle === storeTitle)
                     .map((product) => (
                        <Product
                           product={product}
                           compareId={compareId}
                           dispatchFilter={dispatchFilter}
                           listType={LIST_TYPE.STORE}
                           key={product._id}
                        />
                     ))
               )}
            </ProductList>
         </ListContainer>
      </Container>
   );
}

export default StoreList;
