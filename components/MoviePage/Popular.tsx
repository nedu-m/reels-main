/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

type Props = {};

export default function Popular({}: Props) {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <ContentHeader>
            <HeaderTitle>What's Popular</HeaderTitle>
            <SelectorWrapper>
              <SelectInner>
                <Selector>
                  <SelectedText>
                    <Selected name="membership" id="membership">
                      <SelectOption value="">Today</SelectOption>
                      <SelectOption value="">This Week</SelectOption>
                    </Selected>
                  </SelectedText>
                </Selector>
              </SelectInner>
            </SelectorWrapper>
          </ContentHeader>
        </Content>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 1rem 0;
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

const ContentHeader = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 1rem;
`;

const HeaderTitle = styled.h2`
  font-size: 1.313rem;
  font-weight: 500;
  white-space: nowrap;
`;

const SelectorWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: block;
  position: relative;
  top: 0;
  left: 0;
`;

const SelectInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  margin-left: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

const Selector = styled.div`
  border-radius: 30px;
  background-color: #000;
  color: #fff;
  display: block;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
`;

const SelectedText = styled.label`
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  padding: 0 20px;
  margin: 0;
  white-space: nowrap;
  height: 28.5px;
`;

const Selected = styled.select`
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: none;
  background: #000;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

const SelectOption = styled.option`
  font-weight: 400;
  font-size: 1em;
`;
