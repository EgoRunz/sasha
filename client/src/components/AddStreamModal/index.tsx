import React, { useState } from "react";
import { StreamUser } from "../../types/StreamUser";
import {
  Modal,
  Box,
  Overlay,
  CloseIcon,
  Form,
  Input,
  Title,
  Content,
  Label,
} from "./style";

interface UserModal {
  isOpen: boolean;
  onClose: () => void;
  onUserAdd: (value: StreamUser) => void;
}

export const AddStreamModal: React.FC<UserModal> = ({
  isOpen,
  onClose,
  onUserAdd,
}) => {
  const [value, setValue] = useState("");
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onUserAdd({ id: Number(new Date()), name: value, email: "test@mail.ru" });
    onClose();
  };

  return isOpen ? (
    <Modal>
      <Overlay onClick={onClose} />
      <Box>
        <CloseIcon>
          <i onClick={onClose} className="material-icons">
            close
          </i>
        </CloseIcon>
        <Title>Add your teammates</Title>
        <Content>
          Who are you having 1-on-1s with? Start by adding your manager, direct
          reports, mentor, coaches or any of your other teammates.
        </Content>
        <Form onSubmit={submitHandler}>
          <Label>
            add teammate
            <Input
              onChange={changeHandler}
              value={value}
              placeholder={"Add one or more teammates by name or email"}
            />
          </Label>
        </Form>
      </Box>
    </Modal>
  ) : null;
};
