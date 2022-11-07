import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  &:after {
    content: "😵";
    width: 100%;
    height: 1px;
    margin-top: 1rem;
    margin-left: 0.3rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const LinkTitle = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  margin-bottom: 1rem;

  &::after {
    content: " ⬅";
    margin-left: 0.3rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const LinkText = styled.p`
  font-size: 1.05rem;
  color: #000;
  margin-bottom: 1rem;
`;

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>Reels</title>
      </Head>
      <Title>404</Title>
      <Text>Omo, Page not found</Text>
      <LinkContainer>
        <LinkTitle href="/">Go back to home page</LinkTitle>
        <LinkText>If you think this is a mistake, contact us.</LinkText>
      </LinkContainer>
    </Container>
  );
};

export default NotFound;
