import styled from "styled-components";

const Container = styled.section`
  background-color: ${(props) => props.theme.colors.black};
  padding: 6rem 0;
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
`;

const FooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1.5rem;
`;

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50%;
    padding: 1.5rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  place-content: center;
  margin: 0 0.335rem;
`;

const FooterTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5em;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  margin: 0 0 1.5rem;
`;

const FooterText = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
`;

const FooterSlogan = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 0.9em;
  font-weight: 400;
  text-decoration: none;
  margin: 0;
`;

export default function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <FooterInner>
          <FooterContainer>
            <FooterContent>
              <FooterTitle>Reels</FooterTitle>
              <FooterText>For All Your Movie Needs.</FooterText>
              <FooterSlogan>
                © Copyright 2022. All Rights Reserved by Reels.
              </FooterSlogan>
            </FooterContent>
          </FooterContainer>
        </FooterInner>
      </FooterWrapper>
    </Container>
  );
}
