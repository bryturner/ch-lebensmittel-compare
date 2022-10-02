import styled, { ThemeProvider } from "styled-components";

export const theme = {
   fontSize: {
      sm: "1.2rem",
      smMd: "1.4rem", //
      mdLg: "1.6rem", //
      lg: "2rem",
      hd1: "5rem",
      hd2: "2.8rem", //
      hd3: "2.2rem",
   },
   fontFamily: {
      mali: "'Mali', cursive",
      ibm: "'IBM Plex Sans', sans-serif", //
   },
   // #8cd9ff, #6caddf, #3a55b4
   color: {
      primary: "#6caddf", //
      primaryLightest: "#f0f7fc", //
      primaryLight: "#edf0fe",
      primaryMed: "#4e66bc",
      primaryDark: "#344da2",
      secondary: "#81de76",
      secondaryLightest: "#f2fcf1",
      secondaryLight: "#e6f8e4",
      secondaryMed: "#67b25e",
      secondaryDark: "#416f3b",
      secondaryDarkOp: "rgba(65, 111, 59, 0.5);",
      error: "#f20707",
      lightGray: "#ccc",
      medGray: "#777",
      darkGray: "#222", //
      darkGrayWithOp: "rgba(51, 51, 51, 0.75)",
      green: "#3bb143",
   },
   padding: {
      listsPadding: "2rem 4.8rem",
   },
   screenSize: {
      laptop: "1145px",
      tablet: "912px",
      mobileL: "780px",
      mobileM: "475px",
      mobileS: "380px",
   },
};

export const IconButtonStyled = styled.button`
   flex: 1;
   padding: 3px;
   width: 2.6rem;
   height: 2.6rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background: none;
   border: none;

   &:hover {
      transform: scale(1.2);
   }
`;

export const SecondaryButton = styled.button`
   font-family: inherit;
   border-radius: 5px;
   background-color: ${theme.color.primaryLightest};
   color: ${theme.color.primaryDark};

   &:hover {
      background-color: ${theme.color.primary};
      color: white;
   }
`;

function Theme({ children }) {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
