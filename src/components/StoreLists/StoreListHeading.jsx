import styled from "styled-components";

const Container = styled.div`
   position: relative;
`;
const Heading = styled.h2`
   font-size: ${({ theme }) => theme.fontSize.hd2};
   font-family: ${({ theme }) => theme.fontFamily.ibm};
   color: ${({ theme }) => theme.color.darkGray};
   font-weight: bold;
   border: 1px solid ${({ theme }) => theme.color.secondaryMed};
   border-bottom: none;
   background-color: ${({ theme }) => theme.color.secondaryMed};
   text-align: center;
   padding: 1rem 0;
`;

const Button = styled.button`
   display: ${(props) => (props.compareId === "" ? "none" : "block")};
   position: absolute;
   bottom: 50%;
   right: 0;
   transform: translate(-25px, 50%);
   padding: 5px 10px;
   border: none;
   font-size: ${({ theme }) => theme.fontSize.smMd};
   font-family: inherit;
   border-radius: 5px;
   background-color: ${({ theme }) => theme.color.primaryLightest};
   color: ${({ theme }) => theme.color.primaryDark};
   transition: background-color 0.1s linear;

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.sm};
   }

   &:hover {
      background-color: #c4def2;
   }
`;

function StoreListHeading({ storeTitle, dispatchFilter, compareId }) {
   return (
      <Container>
         <Heading>{storeTitle}</Heading>
         <Button
            compareId={compareId}
            onClick={() => {
               dispatchFilter({ type: "reset" });
            }}
         >
            Reset
         </Button>
      </Container>
   );
}

export default StoreListHeading;
