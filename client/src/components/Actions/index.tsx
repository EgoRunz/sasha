import React, { useState } from "react";
// import { useQuery } from "react-query";
import { ListItem } from "../ListItem";

import { Title, TextWrapper, Subtitle, Label, Input, Form } from "./style";

interface Items {
  id?: string;
  description: string;
}

export function Actions() {
  const [item, setItem] = useState<Items>({
    id: new Date().toDateString(),
    description: "",
  });
  const [items, setItems] = useState<Array<Items>>();
  const handlerPoint = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ id: new Date().toDateString(), description: event.target.value });
  };
  // const query = useQuery("test", test, [items]);
  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (item) {
      setItems((prev) => {
        return prev ? [...prev, { ...item }] : [{ ...item }];
      });
    }
    setItem({ description: "" });
  };
  return (
    <TextWrapper>
      <Title>Action</Title>
      <Subtitle>The things to talk about</Subtitle>
      <Form onSubmit={handlerSubmit}>
        <Label>
          <Input
            placeholder="add item"
            value={item?.description}
            onChange={handlerPoint}
          />
        </Label>
        {items &&
          items?.map((item, index) => <ListItem item={item} key={index} />)}
      </Form>
    </TextWrapper>
  );
}
