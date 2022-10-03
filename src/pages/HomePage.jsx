import styled from "styled-components";
import PageErrorBoundary from "../components/Error/PageError";
import Footer from "../components/Footer/Footer";
import StoreLists from "../components/StoreLists/StoreLists";
import UserLists from "../components/UserLists/UserLists";
import { UserListsContextProvider } from "../contexts/UserListsContext";
import allGroceries from "../images/allGroceries.jpg";

const Container = styled.div`
   position: relative;
`;

const BackgroundImage = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   background-image: url(${allGroceries});
   background-size: cover;
   background-position: left;
   width: 100%;
   height: 100%;
   opacity: 0.3;
   z-index: -5;
`;

const Header = styled.header`
   padding: 3.2rem 2rem;
   color: ${({ theme }) => theme.color.darkGray};
   margin-bottom: 1rem;
`;

const Heading = styled.h1`
   font-size: ${({ theme }) => theme.fontSize.hd1};
   font-family: ${({ theme }) => theme.fontFamily.mali};
   text-align: center;

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      font-size: 4rem;
   }
`;

const Subheading = styled.p`
   text-align: center;
   font-size: ${({ theme }) => theme.fontSize.lg};

   @media (max-width: ${({ theme }) => theme.screenSize.mobileL}) {
      font-size: ${({ theme }) => theme.fontSize.mdLg};
   }
`;

const HomePage = () => {
   return (
      <PageErrorBoundary>
         <Container>
            <Header>
               <Heading>Compare Groceries in Switzerland</Heading>
               <Subheading>
                  Find the best prices all within walking distance
               </Subheading>
            </Header>
            <UserListsContextProvider>
               <StoreLists />
               <UserLists />
            </UserListsContextProvider>
            <Footer />
            <BackgroundImage />
         </Container>
      </PageErrorBoundary>
   );
};

export default HomePage;
