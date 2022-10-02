import React from "react";
import styled from "styled-components";

const Container = styled.div`
   flex: 1;
   display: flex;
   gap: 0.5rem;
   align-items: center;
   justify-content: center;

   @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
      justify-content: left;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      flex-direction: column;
      align-items: flex-start;
   }
`;

const Label = styled.label`
   font-size: ${({ theme }) => theme.fontSize.mdLg};

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      font-size: ${({ theme }) => theme.fontSize.smMd};
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileM}) {
      font-size: ${({ theme }) => theme.fontSize.mdLg};
   }
`;

const Wrapper = styled.div`
   width: 50%;
   display: flex;
   position: relative;
   min-width: 10rem;

   @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
      width: 60%;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      width: 100%;
   }
`;

const SearchInput = styled.input`
   width: 100%;
   height: 29px;
   padding: 0.5rem 3rem 0.5rem 1rem;
   overflow: hidden;
   ::-webkit-search-decoration,
   ::-webkit-search-cancel-button,
   ::-webkit-search-results-button,
   ::-webkit-search-results-decoration {
      display: none;
   }
`;

function SearchBox({ state, dispatchFilter }) {
   return (
      <Container>
         <Label htmlFor="search-box">Find product:</Label>
         <Wrapper>
            <SearchInput
               id="search-box"
               type="search"
               placeholder="Search by name"
               maxLength="20"
               value={state.searchQuery}
               onChange={(e) =>
                  dispatchFilter({
                     type: "query",
                     payload: { searchQuery: e.target.value },
                  })
               }
            />
         </Wrapper>
      </Container>
   );
}

export default React.memo(SearchBox);
