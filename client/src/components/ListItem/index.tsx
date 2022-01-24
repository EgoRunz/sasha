import React from "react";
import { Label } from "./style";

interface Props {
  item: { description: string; id?: string };
}

export function ListItem({ item }: Props) {
  return (
    <div>
      <Label>
        <input type="checkbox" />
        <span></span>
        <div>{item.description}</div>
      </Label>
    </div>
  );
}
