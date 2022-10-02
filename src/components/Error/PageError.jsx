import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorText = styled.h1`
  color: #000;
`;

class PageErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorText>
            Something went wrong and the page was not able to load.
          </ErrorText>
        </ErrorWrapper>
      );
    }
    return this.props.children;
  }
}

export default PageErrorBoundary;
