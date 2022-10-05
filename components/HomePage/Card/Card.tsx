import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1.5rem;
`;

export const CardInner = styled.div`
  width: 11rem;
  margin: 0 auto;
  border-radius: 1rem;
  background-color: #f3f3f3;
  padding: 0.75rem;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.9s ease-in-out;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 10rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 8.8rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  margin: -1rem;
  height: auto;
`;

export const CardImageWrapper = styled.div`
  padding: 0.9rem 0.9rem 0.7rem;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  border-radius: 0.8rem;
`;
