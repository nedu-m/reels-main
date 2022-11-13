import styled from "styled-components";

import {
  CardContainer,
  CardWrapper,
  CardInner,
  CardContent,
  CardImageWrapper,
  CardImage,
} from "@components/HomePage/Card/Card";

import {
  ButtonWrapper,
  ButtonWrapperII,
  ButtonInner,
  Button,
  ButtonII,
} from "@components/HomePage/Buttons/Button";
import { trendingProps } from "types/movies";

const Hero = ({ trendingMovies }: trendingProps) => {
  return (
    <Container>
      <InnerContainer>
        <HeroWrapper>
          <HeroLettering>Stay in the Know.</HeroLettering>
          <HeroTitle>
            Instantly download your favorite movies, for free.
          </HeroTitle>
          <ButtonWrapper>
            <ButtonInner>
              <Button>Explore</Button>
            </ButtonInner>
          </ButtonWrapper>
          <ButtonWrapperII>
            <ButtonInner>
              <ButtonII>Join Our Mail List</ButtonII>
            </ButtonInner>
          </ButtonWrapperII>
        </HeroWrapper>

        <HeroListing>
          <CardContainer>
            {trendingMovies.map((movies) => (
              <CardWrapper key={movies.id}>
                <CardInner>
                  <CardContent>
                    <CardImageWrapper>
                      <CardImage
                        src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                        alt={movies.title}
                        width={500}
                        height={750}
                        placeholder="empty"
                      />
                    </CardImageWrapper>
                  </CardContent>
                </CardInner>
              </CardWrapper>
            ))}
          </CardContainer>
        </HeroListing>
      </InnerContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  width: 100%;
  height: max-content;
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

const HeroWrapper = styled.div`
  width: 100%;
  padding: 3.5rem 1.5rem 1.5rem;
`;

const HeroListing = styled.div`
  padding: 1.5rem;
  margin-top: -3rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 2rem 0 0 -1.5rem;
  }
`;

const HeroTitle = styled.h1`
  margin-bottom: 3rem;
  margin-top: auto;
  font-size: 4rem;
  line-height: 0.99;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const HeroLettering = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.313rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #eeeeee;
  opacity: 1;
`;
