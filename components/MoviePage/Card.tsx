import Image from "next/image";
import styled from "styled-components";

type Props = {
  data: {
    map(
      arg0: (movie: {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        overview: string;
        backdrop_path: string;
      }) => JSX.Element
    ): [];
  };
};

export default function Card({ data }: Props) {
  console.log(data);
  return (
    <Container>
      <ContainerInner>
        {data.map((movie) => (
          <CardContainer key={movie.id}>
            <CardImageWrapper>
              <CardImageInner>
                <CardImageLink>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={750}
                  />
                  <p>{`https://image.tmdb.org/t/p/w500${movie.poster_path}`}</p>
                </CardImageLink>
              </CardImageInner>
              <p>{movie.title}</p>
            </CardImageWrapper>
          </CardContainer>
        ))}
      </ContainerInner>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 0;
  margin-right: 0;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;

  &::after {
    content: "";
    width: 40px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
    transition: linear 0.3s;
    opacity: 1;
    will-change: auto;
  }
`;

const ContainerInner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 98.6vw;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  height: auto;

  //Style the scrollbar and make it appealing to the user
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.red};
    border-radius: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ece3e3;
    border-radius: 10px;
    width: 10px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  border-radius: 6px;
  margin-left: 20px;
  width: 150px;
  max-width: 150px;
  background: #fff;

  &:first-child {
    margin-left: 15px;
  }
`;

const CardImageWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
  border-radius: 6px;
  width: fit-content;
  min-height: calc(150px * 1.5);
  height: calc(150px * 1.5);
  background: #dbdbdb;
  overflow: hidden;
`;

const CardImageInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
`;

const CardImageLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: normal;
`;
