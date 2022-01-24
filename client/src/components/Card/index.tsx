import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Title } from "./style";

interface IProps {
  login?: boolean;
  path: string;
  text: string;
}
export function Card({ path, text, login }: IProps) {
  return (
    <Wrapper>
      <Title>{login ? "register now" : "Alredy have account?"}</Title>
      <Link to={path}>{text}</Link>
    </Wrapper>
  );
}
