import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

const Title = styled.p`
   font-size: ${(props) => props.theme.fontSize.sm};
   color: ${(props) => props.theme.color.darkGrayWithOp};
   text-align: left;
`;

const DetailText = styled.span`
   flex: 1;
   text-align: left;
   color: ${(props) => props.theme.color.darkGray};
   font-size: ${(props) => props.theme.fontSize.mdLg};

   @media (max-width: ${({ theme }) => theme.screenSize.laptop}) {
      font-size: ${({ theme }) => theme.fontSize.smMd};
   }
`;

function ProductDetail({ detailText, detailTitle }) {
   return (
      <Wrapper>
         <Title>{detailTitle}</Title>
         <DetailText>{detailText}</DetailText>
      </Wrapper>
   );
}

export default ProductDetail;
