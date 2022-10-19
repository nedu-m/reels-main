import { useState } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <AnnounceError />;
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

const AnnounceError = () => {
  return (
    <ErrorBoundaryWrapper>
      <h3>Beep boop, something went wrong...</h3>
    </ErrorBoundaryWrapper>
  );
};

const ErrorBoundaryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1.5rem 0;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;

  h3 {
    ::before {
      content: "🤖";
      margin-right: 0.5rem;
    }
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;
