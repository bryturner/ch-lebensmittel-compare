import styled from "styled-components";
import FooterLink from "./FooterLink";

const Container = styled.div`
   padding: 10px 20px;
   background-color: rgba(255, 255, 255, 0.8);
   display: flex;
   justify-content: space-around;
   font-size: ${(props) => props.theme.fontSize.mdLg};

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      font-size: ${(props) => props.theme.fontSize.smMd};
   }
`;

const Text = styled.p``;

function Footer() {
   return (
      <Container>
         <FooterLink
            url="https://github.com/bryturner/ch-lebensmittel-compare"
            linkText="Github Repo"
         />
         <Text>Website by Bryan Turner</Text>
         <FooterLink
            url="https://www.linkedin.com/in/bryanturnerdev/"
            linkText="LinkedIn Profile"
         />
      </Container>
   );
}

export default Footer;
