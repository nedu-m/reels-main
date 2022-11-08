import styled from "styled-components";
import Image from "next/image";

const MovieDetails = ({
  title,
  poster,
  overview,
  vote_average,
  release_date,
  goBack,
}: any) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <ImageWrapper>
            <ImageInner>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt={title}
                width={500}
                height={750}
                placeholder="empty"
              />
            </ImageInner>
          </ImageWrapper>
        </ImageContainer>
        <MovieInfoContainer>
          <MovieInfoInner>
            <MovieInfo>
              <h2>{title}</h2>
              <span>Year: {release_date}</span>

              <MovieRating>
                <span>Rating: {vote_average}</span>
              </MovieRating>
            </MovieInfo>
            <MovieDetailsContainer>
              <h3>Overview</h3>
              <MovieDetailsInner>
                <p>{overview}</p>
              </MovieDetailsInner>
            </MovieDetailsContainer>
          </MovieInfoInner>
        </MovieInfoContainer>
      </Container>
      <ButtonContainer>
        <BackButton onClick={goBack}>Back</BackButton>
      </ButtonContainer>
    </>
  );
};

export default MovieDetails;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
  max-width: 1200px;
  padding-top: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0 0 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 450px;
  margin: 0 1rem;
`;

const ImageWrapper = styled.div`
  height: auto;
  width: 300px;
  min-width: 300px;
  border-width: 0px;
  overflow: hidden;
  border-radius: 8px;
`;
const ImageInner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

const MovieInfoContainer = styled.div`
  display: flex;
`;

const MovieInfoInner = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  box-sizing: border-box;
  padding-left: 1rem;
`;

const MovieInfo = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  gap: 1rem;

  h2 {
    width: 100%;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    opacity: 0.9;
  }

  span {
    display: inline-flex;
    opacity: 0.8;
    font-weight: 500;
  }
`;

const MovieRating = styled.ul`
  ::before {
    content: "⭐";
    font-size: 1.5rem;
    margin: 0;
  }
  margin: 0;
  padding: 0;
`;

const MovieDetailsContainer = styled.div`
  width: 100%;
  max-width: calc(100% - 1rem);

  h3 {
    margin-top: 10px;
    width: 100%;
    font-weight: 600;
    font-size: 1.6em;
    margin-bottom: 8px;
  }
`;

const MovieDetailsInner = styled.div`
  p {
    box-sizing: border-box;
    margin-bottom: 0;
    font-size: 1em;
    line-height: 1.5;
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  max-width: 1200px;
  padding-top: 1rem;
`;

const BackButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  transition: all 0.2s ease-in-out;
  ::before {
    content: "⬅";
    font-size: 1.5rem;
    margin: 0;
  }
`;
