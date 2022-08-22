import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 4rem auto;
  padding: 0 4rem;
  background-color: #ac0c06;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 0.9rem;
    margin: 1.5rem auto 3rem;
    height: auto;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: -1.5rem;
  padding: 3.5rem 0 3rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 1.5rem;
  margin-top: 0.5rem;
`;

const ContentListing = styled.div`
  padding: 1.5rem;
  margin-top: -3rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 50%;
    padding: 1.5rem;
    margin: 0;
  }
`;

const CardWrapper = styled.div`
  max-width: max-content;
  margin: 6rem auto 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: auto;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.8rem;
  margin: -0.75rem -0.75rem 0 -0.75rem;
  @media (max-width: 425px) {
    grid-template-columns: auto;
  }
`;

const CardContainerInner = styled.div`
  width: 100%;
  padding: 0.75rem;
`;

const Card = styled.div`
  width: 16rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: #f3f3f3;
  padding: 0.75rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.9s ease-in-out;
  }
`;

const CardContent = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

const CardContentWrapper = styled.div`
  width: auto;
  padding: 0.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.p`
  color: #202020;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-weight: 500;
`;

const CardYear = styled.div`
  display: flex;
  place-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.85;
  color: #202020;
`;

const CardGenreWrapper = styled.div`
  display: grid;
  place-content: center;
  border-radius: 9999px;
  background-color: #e2e0e0;
  padding: 0.5rem;
  width: auto;
`;

const CardGenre = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

const ContentTitle = styled.h1`
  margin-bottom: 3rem;
  font-size: 4rem;
  line-height: 0.99;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const ContentListingLettering = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.313rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #eeeeee;
  opacity: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.75rem -0.75rem 0.75rem -0.75rem;
`;

const ButtonWrapperSecond = styled(ButtonWrapper)`
  margin-bottom: 3rem;
`;

const ButtonInner = styled.div`
  width: 100%;
  padding: 0.75rem;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  background-color: white;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    border: ${(props) => props.theme.colors.white} 1px solid;
  }
`;

const ButtonSecond = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
`;

const Hero = () => {
  return (
    <Container>
      <InnerContainer>
        <ContentWrapper>
          <ContentListingLettering>Stay in the Know.</ContentListingLettering>
          <ContentTitle>
            Instantly download your favorite movies, for free.
          </ContentTitle>
          <ButtonWrapper>
            <ButtonInner>
              <Button>Explore</Button>
            </ButtonInner>
          </ButtonWrapper>
          <ButtonWrapperSecond>
            <ButtonInner>
              <ButtonSecond>Join Our Mail List</ButtonSecond>
            </ButtonInner>
          </ButtonWrapperSecond>
        </ContentWrapper>

        <ContentListing>
          <CardWrapper>
            <CardContainer>
              <CardContainerInner>
                <Card>
                  <CardContent>
                    <CardContentWrapper>
                      <CardImage
                        src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                        alt="movie1"
                      />
                    </CardContentWrapper>
                    <CardContentWrapper>
                      <CardTitle>The Shawshank Redemption</CardTitle>
                      <CardYear>2022</CardYear>
                      <CardGenreWrapper>
                        <CardGenre>🙌 Action, Fiction</CardGenre>
                      </CardGenreWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
              </CardContainerInner>
              <CardContainerInner>
                <Card>
                  <CardContent>
                    <CardContentWrapper>
                      <CardImage
                        src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                        alt="movie1"
                      />
                    </CardContentWrapper>
                    <CardContentWrapper>
                      <CardTitle>The Shawshank Redemption</CardTitle>
                      <CardYear>2021</CardYear>
                      <CardGenreWrapper>
                        <CardGenre>🐱‍👤Action, Biopic</CardGenre>
                      </CardGenreWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
              </CardContainerInner>
              <CardContainerInner>
                <Card>
                  <CardContent>
                    <CardContentWrapper>
                      <CardImage
                        src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                        alt="movie1"
                      />
                    </CardContentWrapper>
                    <CardContentWrapper>
                      <CardTitle>The Shawshank Redemption</CardTitle>
                      <CardYear>2022</CardYear>
                      <CardGenreWrapper>
                        <CardGenre>🐱‍🏍Fiction, Biopic</CardGenre>
                      </CardGenreWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
              </CardContainerInner>
              <CardContainerInner>
                <Card>
                  <CardContent>
                    <CardContentWrapper>
                      <CardImage
                        src="https://shuffle.dev/gradia-assets/images/hero/avatar-circle.png"
                        alt="movie1"
                      />
                    </CardContentWrapper>
                    <CardContentWrapper>
                      <CardTitle>The Shawshank Redemption</CardTitle>
                      <CardYear>1994</CardYear>
                      <CardGenreWrapper>
                        <CardGenre>👾Action, Biopic</CardGenre>
                      </CardGenreWrapper>
                    </CardContentWrapper>
                  </CardContent>
                </Card>
              </CardContainerInner>
            </CardContainer>
          </CardWrapper>
        </ContentListing>
      </InnerContainer>
    </Container>
  );
};

export default Hero;
