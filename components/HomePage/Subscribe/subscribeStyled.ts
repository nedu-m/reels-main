import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  padding: 2rem 0;
  background-color: #ac0c06;
`;

export const SubscribeWrapper = styled.div`
  padding: 1rem;
  margin: 3rem auto 0;
  width: 100%;
`;

export const SubscribeInner = styled.div`
  text-align: center;
  max-width: 32rem;
  margin: 0 auto 3rem auto;
`;

export const SubscribeImage = styled(Image)`
  width: 4rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

export const SubscribeTitle = styled.h2`
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 2.625rem;
  line-height: 1;
  margin: 0 0 1.25rem 0;
`;

export const SubscribeDescription = styled.p`
  color: #ececec;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0 0 2rem 0;
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 36rem;
  margin: 0 auto;
  margin-bottom: -0.625rem;
  padding: 0.625rem;
`;

export const SubscribeInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e6e6e6;
  border-color: #cccbcb;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1.8rem 0;
  word-wrap: break-word;
`;

export const SubscribeButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 2rem 0;
  word-wrap: break-word;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  &:hover {
    background-color: #ac0c06;
    color: #fff;
    border: 2.4px solid #fff;
  }
`;

export const SubscribePrivacy = styled.div`
  display: flex;
  place-content: center;
  max-width: 32rem;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export const SubscribePrivacyText = styled.p`
  color: #ececec;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0;
`;

export const SubscribePrivacyLink = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0;
  text-decoration: underline;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
