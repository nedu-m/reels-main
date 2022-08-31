import Image from "next/image";
import { Key } from "react";
import styled from "styled-components";

type Props = {
  data: {
    results: {
      id: number;
      title: string;
      poster_path: string;
      release_date: string;
      overview: string;
      backdrop_path: string;
    };
  };
};

export default function Card({ data }: Props) {
  console.log(data);
  return (
    <Container>
      <ContainerInner>
        {/* <CardContainer>
          <CardImageWrapper>
            <CardImageInner>
              <CardImageLink>
                <CardImage />
              </CardImageLink>
            </CardImageInner>
          </CardImageWrapper>
        </CardContainer> */}
      </ContainerInner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  min-height: 0;
  height: auto;
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
`;

const CardImageWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0 0 0 / 10%);
  border-radius: 6px;
  width: 100%;
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

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
