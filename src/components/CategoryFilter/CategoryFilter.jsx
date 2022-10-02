import React from "react";
import styled from "styled-components";

const Container = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;

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

const CategorySelect = styled.select`
   height: 100%;
   width: 50%;
   padding: 0.5rem;
   color: ${({ theme }) => theme.color.darkGray};

   @media (max-width: ${({ theme }) => theme.screenSize.tablet}) {
      width: 60%;
   }

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      width: 100%;
   }

   &:hover,
   &:focus {
      cursor: pointer;
   }
`;

const CategoryOption = styled.option`
   font-family: inherit;
`;

function CategoryFilter({ category, setCategory }) {
   return (
      <Container>
         <Label htmlFor="category-filter">Category:</Label>
         <CategorySelect
            id="category-filter"
            defaultValue={category}
            onChange={(e) => {
               setCategory(e.target.value);
            }}
         >
            <CategoryOption value="fruechte-gemuese">
               Fr&uuml;chte &amp; Gem&uuml;se
            </CategoryOption>
            <CategoryOption value="milchprodukte-eier">
               Milchprodukte &amp; Eier
            </CategoryOption>
            <CategoryOption value="fleisch-fisch">
               Fleisch &amp; Fisch
            </CategoryOption>
            <CategoryOption value="brot-backwaren">
               Brot &amp; Backwaren
            </CategoryOption>
         </CategorySelect>
      </Container>
   );
}

export default React.memo(CategoryFilter);
