import { useRef, useState } from "react";
import { supabase } from "@helper/supabase";
import SubscribeData from "./data";
import toast, { Toaster } from "react-hot-toast";

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
  const emailRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handlesubscribe = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current?.value;
    if (email) {
      const { error } = await supabase.from("subscribers").insert({ email });
      if (error) {
        toast.error("Something went wrong");
      } else {
        toast.success("You have been subscribed");
      }
    } else {
      toast.error("Please enter your email");
    }
    setLoading(false);
  };

  return (
    <Container>
      <SubscribeWrapper>
        {SubscribeData.map((item, index) => {
          return (
            <SubscribeInner key={index}>
              <SubscribeImage src={item.image} alt="Subscribe" />
              <SubscribeTitle>{item.title}</SubscribeTitle>
              <SubscribeDescription>{item.description}</SubscribeDescription>
              <SubscribeForm>
                <SubscribeInput
                  type="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                />
                <SubscribeButton
                  type="submit"
                  disabled={loading}
                  onClick={handlesubscribe}
                >
                  {loading ? "Loading..." : "Subscribe"}
                </SubscribeButton>
              </SubscribeForm>
              <SubscribePrivacy>
                <SubscribePrivacyText>
                  By subscribing you agree to our
                </SubscribePrivacyText>
                <SubscribePrivacyLink href="#">
                  Privacy Policy
                </SubscribePrivacyLink>
              </SubscribePrivacy>
            </SubscribeInner>
          );
        })}
      </SubscribeWrapper>
      <Toaster />
    </Container>
  );
};

export default Subscribe;
