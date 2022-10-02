import styled from "styled-components";

const Heading = styled.h2`
   font-size: ${({ theme }) => theme.fontSize.hd2};
   font-family: ${({ theme }) => theme.fontFamily.ibm};
   color: ${({ theme }) => theme.color.primaryLightest};
   font-weight: bold;
   border: 1px solid ${({ theme }) => theme.color.primaryMed};
   border-bottom: none;
   background-color: ${({ theme }) => theme.color.primaryMed};
   text-align: center;
   padding: 1rem 0;
`;

function UserListHeading({ listHeading }) {
   return <Heading>{listHeading}</Heading>;
}

export default UserListHeading;
