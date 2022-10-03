//define error boundary component

import { useState } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <PageError />;
  }

  return (
    <ErrorBoundaryWrapper
      onError={() => {
        setHasError(true);
      }}
    >
      {children}
    </ErrorBoundaryWrapper>
  );
}

const ErrorBoundaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const PageError = () => {
  return (
    <ErrorBoundaryWrapper>
      <h1>Something went wrong</h1>
    </ErrorBoundaryWrapper>
  );
};
