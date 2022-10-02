import styled from "styled-components";

const StoreTitle = styled.h3`
   border-bottom: 2px solid ${({ theme }) => theme.color.primaryDark};
   font-size: ${({ theme }) => theme.fontSize.hd3};
   color: ${({ theme }) => theme.color.primaryDark};
   padding: 0 0 0.5rem 2rem;
`;

function UserListStoreTitle({ storeTitle }) {
   return <StoreTitle>{storeTitle}</StoreTitle>;
}

export default UserListStoreTitle;
