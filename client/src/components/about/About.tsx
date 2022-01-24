import React from "react";
import { Card } from "../Card";
import { Wrapper, TextWrapper, Text, Title, CardWrapper } from "./style";

export function About() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Join us and stream with your friend</Text>
        <Title>Go Stream?</Title>
      </TextWrapper>
      <CardWrapper>
        <Card path="/auth/login" text="log in" />
        <Card path="/auth/registration" text="sign up" login={true} />
      </CardWrapper>
    </Wrapper>
  );
}
