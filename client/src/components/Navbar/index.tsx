import React from "react";
import { Header, Menu, Nav, List } from "./style";
interface Props {
  title: string;
}
export function Navigation({ title }: Props) {
  return (
    <Header>
      <Menu>
        <Nav>
          <List>{title}</List>
        </Nav>
      </Menu>
    </Header>
  );
}
