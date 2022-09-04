import styled from "styled-components";
import CardData from "./data";
import Image from "next/image";

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
              {CardData.map((card) => (
                <CardContainerInner key={card.id}>
                  <Card>
                    <CardContent>
                      <CardImageWrapper>
                        <CardImage src={card.src} alt={card.alt} />
                      </CardImageWrapper>
                    </CardContent>
                  </Card>
                </CardContainerInner>
              ))}
            </CardContainer>
          </CardWrapper>
        </ContentListing>
      </InnerContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 4rem auto 0;
  padding: 0 4rem;
  background-color: #ac0c06;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 0.9rem;
    margin: 1.5rem auto 0;
    height: auto;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2.7rem;
  margin: -1.5rem;
  padding: 3.5rem 0 3rem 0;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin-top: -3rem;
    gap: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 3.5rem 1.5rem 1.5rem;
`;

const ContentListing = styled.div`
  padding: 1.5rem;
  margin-top: -3rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1.5rem;
    margin: 2rem 0 0 -1.5rem;
  }
`;

const CardWrapper = styled.div`
  margin: auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.5rem;
  margin: -0.75rem -0.75rem 0 -0.75rem;
  @media (max-width: 425px) {
    grid-template-columns: auto;
    gap: 0;
  }
`;

const CardContainerInner = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
`;

const Card = styled.div`
  width: 11rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: #f3f3f3;
  padding: 0.75rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.9s ease-in-out;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 15rem;
  }
`;

const CardContent = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  margin: -1rem;
  height: auto;
`;

const CardImageWrapper = styled.div`
  padding: 0.9rem 0.9rem 0.7rem;
`;

const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.8rem;
`;

const ContentTitle = styled.h1`
  margin-bottom: 3rem;
  margin-top: auto;
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
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    border: ${(props) => props.theme.colors.white} 3px solid;
  }
`;

const ButtonSecond = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.white};
`;
