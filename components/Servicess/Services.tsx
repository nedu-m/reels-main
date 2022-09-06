import styled from "styled-components";
import Image from "next/image";
import ServiceData from "./data";

const Container = styled.section`
  background-color: #f4f4f5;
  padding: 1.5rem 0 3rem 0;
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    padding: 2.8rem 0 5rem 0;
  }
`;

const ContainerWrapper = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    max-width: clamp(768px, 94vw, 1440px);
  }
`;

const ContainerInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ServiceWrapper = styled.div`
  padding: 1.5rem;
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const ServiceInner = styled.div`
  @media (min-width: 1024px) {
    max-width: 32rem;
  }
`;

const ServiceTitle = styled.h2`
  color: rgba(17, 24, 39, 1);
  font-weight: 800;
  font-size: 4rem;
  line-height: 1;
  margin: 0 0 1.5rem 0;
`;

const ServiceDescription = styled.p`
  color: rgba(61, 68, 78, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 3rem 0;
  word-wrap: break-word;
`;

const ServiceListings = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ServiceListing = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
  color: rgba(17, 24, 39, 1);
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75;
`;

const ServiceListingIcon = styled(Image)`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

const ServiceListingText = styled.h4`
  margin: 0;
`;

const ServiceBackground = styled.div`
  background: linear-gradient(98.24deg, #f06630 0%, #f73535 100%);
  border-radius: 1.5rem;
  width: max-content;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 425px) {
    max-width: fit-content;
  }
`;

const ServiceImage = styled(Image)``;

const Services = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerInner>
          {ServiceData.map((service, index) => (
            <ServiceWrapper key={index}>
              <ServiceInner>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceListings>
                  {service.listings.map((listing, index) => (
                    <ServiceListing key={index}>
                      <ServiceListingIcon src={listing.svg} alt={listing.alt} />
                      <ServiceListingText>{listing.text}</ServiceListingText>
                    </ServiceListing>
                  ))}
                </ServiceListings>
              </ServiceInner>
            </ServiceWrapper>
          ))}
          {ServiceData.map((service, index) => (
            <ServiceWrapper key={index}>
              <ServiceInner>
                <ServiceBackground>
                  <ServiceImage src={service.image} alt={service.alt} />
                </ServiceBackground>
              </ServiceInner>
            </ServiceWrapper>
          ))}
        </ContainerInner>
      </ContainerWrapper>
    </Container>
  );
};

export default Services;
