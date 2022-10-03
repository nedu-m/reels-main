/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styled from "styled-components";
import FeaturesData from "./data";

const Container = styled.section`
  background-color: #f4f4f5;
  padding: 7rem 0 5rem 0;
  overflow: hidden;
`;

const ContainerInner = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
`;

const TitleIntro = styled.p`
  margin: 0 0 1.25rem 0;
  text-align: center;
  font-size: 0.813rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: gray;
  letter-spacing: 1px;
  font-weight: 600;
`;

const Title = styled.h2`
  margin-bottom: 0 0 5rem 0;
  text-align: center;
  font-size: 2.62rem;
  line-height: 1;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const FeaturesListInner = styled.div`
  text-align: center;
  width: 100%;
`;

const FeaturesListSvg = styled.div`
  svg {
    margin: 0 auto 2rem auto;
    vertical-align: middle;
  }
`;

const FeaturesText = styled.p`
  font-weight: 400;
  font-size: 1.313rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.black};
  margin: 0;
`;

const Features = () => {
  return (
    <Container>
      <ContainerInner>
        <TitleIntro>The Features that makes us Special</TitleIntro>
        <Title>Here's how it works</Title>
        <FeaturesContainer>
          {FeaturesData.map((features) => (
            <FeaturesListInner key={features.id}>
              <FeaturesListSvg>
                <Image src={features.src} alt={features.alt} />
              </FeaturesListSvg>
              <FeaturesText>{features.text}</FeaturesText>
            </FeaturesListInner>
          ))}
        </FeaturesContainer>
      </ContainerInner>
    </Container>
  );
};

export default Features;
