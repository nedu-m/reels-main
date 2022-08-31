/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

type Props = {};

export default function Popular({}: Props) {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Header>
            <HeaderTitle>What's Popular</HeaderTitle>
            {/* <SelectWrapper>
              <Selector>
                <Select>
                  <SelectLink>
                    Today
                    <SelectorArrow>
                      <FiChevronDown />
                    </SelectorArrow>
                  </SelectLink>
                </Select>
              </Selector>
            </SelectWrapper> */}
          </Header>
        </Content>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 0;
  padding: 0 3rem;
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

const ContentWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
  width: 100%;
  padding-top: 1.52rem;
`;

const Content = styled.div`
  width: 100%;
  margin: auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  font-size: 1.313rem;
  font-weight: 500;
`;

const SelectWrapper = styled.div`
  width: 100%;
  height: 1.82rem;
  display: block;
  position: relative;
  top: 0;
  left: 0;

  justify-content: start;
  align-content: center;
  align-items: stretch;
  border: ${({ theme }) => theme.colors.black} 1px solid;
  border-radius: 0.8rem;
`;

const Selector = styled.div`
  border-radius: 30px;
  display: block;
  position: relative;
  background: #000;
`;

const Select = styled.h3`
  display: inline-flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 1rem;
  padding: 4px 20px;
  margin-bottom: 0;
  white-space: nowrap;
  font-weight: 600;
`;

const SelectLink = styled.a`
  background: linear-gradient(to right, #f06630 0%, #ca1a1d 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SelectorArrow = styled.span`
  display: inline-flex;
  top: 3px;
  opacity: 1;
  filter: invert(89%) sepia(21%) saturate(454%) hue-rotate(75deg)
    brightness(104%) contrast(99%);
`;
