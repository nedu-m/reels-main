/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

type Props = {
  title: string;
};

export function SelectButton({ title }: Props) {
  return (
    <>
      <Container>
        <HeaderTitle>{title}</HeaderTitle>
        <SelectorWrapper>
          <SelectInner>
            <Selector>
              <SelectedText>
                <Selected name="trending" id="trending">
                  <SelectOption value="">Today</SelectOption>
                  <SelectOption value="">This Week</SelectOption>
                </Selected>
              </SelectedText>
            </Selector>
          </SelectInner>
        </SelectorWrapper>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0 2.1rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  max-width: 100vw;

  @media (max-width: 768px) {
    padding: 0 0.8rem;
  }
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
