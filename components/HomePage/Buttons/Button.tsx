import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.75rem -0.75rem 0.75rem -0.75rem;
`;

export const ButtonWrapperII = styled(ButtonWrapper)`
  margin-bottom: 3rem;
`;

export const ButtonInner = styled.div`
  width: 100%;
  padding: 0.75rem;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 0.375rem;
  border: none;
  background-color: white;
  padding: 1rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.black};
    color: white;
    border: ${(props) => props.theme.colors.white} 3px solid;
  }
`;

export const ButtonII = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.white};
`;
