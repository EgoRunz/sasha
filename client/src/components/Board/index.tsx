import React, { useState } from "react";
import { Wrapper, DateWrapper, Picker } from "./style";
import { Actions } from "../Actions";
import "react-datepicker/dist/react-datepicker.css";

interface BoardItem {
  id: string; // change on number
  content: string;
}

interface BoardProps {
  item: BoardItem;
}

export function Board({ item }: BoardProps) {
  const [startDate, setStartDate] = useState(new Date());
  const handlerDate = (date: Date) => setStartDate(date);

  return (
    <Wrapper>
      <p>{item.id}</p>
      <p> {item.content}</p>
      <DateWrapper>
        <Picker
          selected={startDate}
          onChange={handlerDate}
          value={String(startDate.toLocaleDateString())}
        />
      </DateWrapper>
      <Actions></Actions>
    </Wrapper>
  );
}
