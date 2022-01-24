import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: monospace;
  display: flex;
  min-height: 100vh;
  height: fit-content;
  background-color: #f5f6f9;
  color: #000000;
`;
export const LeftWrapper = styled.div`
  background-color: #ffffff;
  flex: 0 0 27.333%;
  text-align: center;
`;
export const RightWrapper = styled.div``;

export const Title = styled.p`
  font-size: 25px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc9c9;
`;

export const OneToOne = styled.div`
  margin-top: 30px;
  height: 250px;
`;

export const OneToOneTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 25px;
`;

export const TextWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  align-items: center;
`;
export const UserWrapper = styled.div`
  padding: 30px 10px 0 80px;
  text-align: start;
`;

export const UserWrap = styled.div`
  padding: 7px 40px;
`;

export const CurrentUser = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const Button = styled.button`
  margin: 0 0 0 5px;
  padding: 0 5px;
  height: 25px;
  font-size: 10px;
  line-height: 0;
`;
