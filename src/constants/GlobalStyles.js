import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

html {
  font-size: 62.5%; 

  @media (max-width: ${({ theme }) => theme.screenSize.mobileM}) {
      font-size: 50%;
   }
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  }

button {
	cursor: pointer;
	transition: all 0.1s linear;
}

input, select {
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 1px solid ${({ theme }) => theme.color.primaryDark};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.primaryLight};
  transition: all 0.1s linear;
  outline: 0;

  &:hover,
  &:focus {
	border-color: ${({ theme }) => theme.color.primaryMed};
	box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primaryMed};
   background-color: #fff;
  }
}
`;

export default GlobalStyles;
