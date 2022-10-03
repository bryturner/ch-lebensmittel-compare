import styled from "styled-components";
import { XCircle } from "phosphor-react";

const Container = styled.div`
   display: ${(props) => (props.isError.length > 1 ? "block" : "none")};
   width: fit-content;
   margin: 0 auto;
`;

const IconWrapper = styled.div`
   vertical-align: middle;
   display: inline-block;
   padding-right: 0.4rem;
`;

const Error = styled.span`
   font-size: ${({ theme }) => theme.fontSize.mdLg};
   color: ${({ theme }) => theme.color.error};
`;

function ErrorMessage({ errorMsg }) {
   return (
      <Container isError={errorMsg}>
         <IconWrapper>
            <XCircle size={18} color="#f20707" />
         </IconWrapper>
         <Error>{errorMsg}</Error>
      </Container>
   );
}

export default ErrorMessage;
