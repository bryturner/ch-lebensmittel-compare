import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
   display: ${(props) => (props.listType === "userList" ? "none" : "block")};
`;

const Label = styled.label`
   padding: 0.6rem 1rem;
   border-radius: 5px;
   border: 1px solid
      ${({ theme, productId, compareId }) =>
         productId === compareId ? theme.color.green : theme.color.primary};
   background-color: ${({ theme, productId, compareId }) =>
      productId === compareId
         ? theme.color.green
         : theme.color.primaryLightest};
   cursor: pointer;
   color: ${({ theme, productId, compareId }) =>
      productId === compareId ? "#fff" : theme.color.primaryMed};
   transition: all 0.1s linear;
   font-size: ${({ theme }) => theme.fontSize.smMd};

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.sm};
   }

   &:hover {
      background-color: ${({ theme, productId, compareId }) =>
         productId === compareId ? theme.color.green : theme.color.primary};
      color: #fff;
   }
`;

const Radio = styled.input`
   position: absolute;
   opacity: 0;
`;

function CompareButton({ product, dispatchFilter, listType, compareId }) {
   return (
      <Wrapper listType={listType}>
         <Radio
            type="radio"
            name="compare"
            id={product._id}
            value={product._id}
            onClick={() => {
               dispatchFilter({
                  type: "compare",
                  payload: {
                     selectedProduct: product.title,
                     compareId: product._id,
                  },
               });
            }}
         />
         <Label
            compareId={compareId}
            productId={product._id}
            htmlFor={product._id}
         >
            Compare
         </Label>
      </Wrapper>
   );
}

export default CompareButton;
