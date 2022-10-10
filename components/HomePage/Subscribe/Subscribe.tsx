import { useState } from "react";
import { supabaseClient } from "../../../helper/supabaseClient";
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
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabaseClient.auth.signUp({
      email: email,
      password: "",
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
    clearInput();
  };

  //clear input after submit
  const clearInput = () => {
    setEmail("");
    setFullName("");
  };

  return (
    <Container>
      <SubscribeWrapper>
        {SubscribeData.map((item, index) => {
          return (
            <SubscribeInner key={index}>
              <SubscribeImage src={item.image} />
              <SubscribeTitle>{item.title}</SubscribeTitle>
              <SubscribeDescription>{item.description}</SubscribeDescription>
              <SubscribeForm onSubmit={handleSubmit}>
                <SubscribeInput
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <SubscribeInput
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SubscribeButton type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Subscribe"}
                </SubscribeButton>
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
