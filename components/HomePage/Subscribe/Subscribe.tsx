import { useState } from "react";
import { supabase } from "../../../helper/supabaseClient";
import SubscribeData from "./data";

import {
  Container,
  SubscribeWrapper,
  SubscribeInner,
  SubscribeImage,
  SubscribeTitle,
  SubscribeForm,
  SubscribeInput,
  SubscribeButton,
  SubscribePrivacy,
  SubscribePrivacyText,
  SubscribePrivacyLink,
  SubscribeDescription,
} from "./subscribeStyled";

const Subscribe = () => {
  //render the subscribe component with the data from the data.ts file
  return (
    <Container>
      <SubscribeWrapper>
        {SubscribeData.map((item, index) => {
          return (
            <SubscribeInner key={index}>
              <SubscribeImage src={item.image} />
              <SubscribeTitle>{item.title}</SubscribeTitle>
              <SubscribeDescription>{item.description}</SubscribeDescription>
              <SubscribeForm>
                <SubscribeInput
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                />
                <SubscribeInput type="email" name="email" placeholder="Email" />
                <SubscribeButton type="submit">Sign Up</SubscribeButton>
              </SubscribeForm>
              <SubscribePrivacy>
                <SubscribePrivacyText>
                  By subscribing, you agree to our
                </SubscribePrivacyText>
                <SubscribePrivacyLink href="#">
                  Privacy Policy
                </SubscribePrivacyLink>
              </SubscribePrivacy>
            </SubscribeInner>
          );
        })}
      </SubscribeWrapper>
    </Container>
  );
};

export default Subscribe;
