import styled from "styled-components";

export const Modal = styled.div``;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.6;
`;

export const Box = styled.div`
  background-color: #fff;
  height: 300px;
  width: 500px;
  padding: 10px;
  border-radius: 20px;
  position: absolute;
  z-index: 11;
  top: 30%;
  left: 40%;
`;

export const CloseIcon = styled.div`
  text-align: end;
`;
export const Title = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 27px;
`;

export const Label = styled.label`
  padding-top: 10px;
`;

export const Input = styled.input``;

export const Content = styled.div``;

export const Form = styled.form`
  padding: 5px;
  margin-top: 10px;
`;
