import Image from "next/image";
import styled from "styled-components";
import {
  ContentWrapper,
  ContentInner,
  CardContainer,
  CardImageWrapper,
  CardImageInner,
  CardImageLink,
} from "@components/MoviePage/Card";

type Props = {
  searchResults: {
    id: number;
    title: string;
    poster_path: string;
  }[];
};

//Define the component and map the data to the component
export default function ResultsCard({ searchResults }: Props) {
  //if the search results are empty, don't render the component
  if (searchResults.length === 0) {
    return null;
  } else {
    //if the search results are not empty, render the component
    return (
      <ContainerInner>
        <ContentWrapper>
          <ContentInner>
            {searchResults.map((movie) => (
              <CardContainer key={movie.id}>
                <CardImageWrapper>
                  <CardImageInner>
                    <CardImageLink>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={500}
                        height={750}
                        placeholder="empty"
                      />
                      <p>{`https://image.tmdb.org/t/p/w500${movie.poster_path}`}</p>
                    </CardImageLink>
                  </CardImageInner>
                  <p>{movie.title}</p>
                </CardImageWrapper>
              </CardContainer>
            ))}
          </ContentInner>
        </ContentWrapper>
      </ContainerInner>

      // <ContentWrapper>
      //   <ContentInner>
      //     <CardContainer>
      //       {searchResults.map((movie) => (
      //         <CardImageWrapper key={movie.id}>
      //           <CardImageInner>
      //             <CardImageLink href={`/movies/${movie.id}`}>
      //               <Image
      //                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      //                 alt={movie.title}
      //                 width={500}
      //                 height={750}
      //                 layout="responsive"
      //               />
      //             </CardImageLink>
      //           </CardImageInner>
      //         </CardImageWrapper>
      //       ))}
      //     </CardContainer>
      //   </ContentInner>
      // </ContentWrapper>
    );
  }
}

const ContainerInner = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 1rem 0;
  padding: 0 1rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
