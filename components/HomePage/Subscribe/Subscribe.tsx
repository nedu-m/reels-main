import { useState } from "react";
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
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  //set notifcation toasts for success and error
  const notifySuccess = () =>
    toast.success("Check your email for the confirmation link!");
  const notifyError = () =>
    toast.error("Invalid email address. Please try again!");

  //Handle the form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    //Check if the email is a valid email address - using regex
    const isEmail = /\S+@\S+\.\S+/.test(email);

    //Check if the email is valid, send a toast notification if not
    if (!isEmail) {
      notifyError();
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: "password",
    });
    if (error) {
      alert(error.message);
    } else {
      notifySuccess();
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
                  {loading ? "Sending a link..." : "Subscribe"}
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
        <Toaster />
      </SubscribeWrapper>
    </Container>
  );
};

export default Subscribe;
