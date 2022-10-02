import styled from "styled-components";
import { SecondaryButton } from "../../constants/Theme";

const ListButton = styled(SecondaryButton)`
   font-size: ${({ theme }) => theme.fontSize.mdLg};
   padding: 1rem 2rem;
   min-width: 15rem;
   border: 2px solid ${({ theme }) => theme.color.primaryMed};

   &:hover {
      border: 2px solid ${({ theme }) => theme.color.primary};
   }
`;

function UserListButton({ handleClick, buttonText }) {
   return <ListButton onClick={() => handleClick()}>{buttonText}</ListButton>;
}

export default UserListButton;
