import { StreamNav } from "../StreamNav";

import {
  LeftWrapper,
  Title,
  TextWrapper,
  OneToOneTitle,
  OneToOne,
} from "./style";

interface UserNavProps {
  handlerModalOpen: () => void;
}

export const StreamAside = ({ handlerModalOpen }: UserNavProps) => {
  return (
    <>
      <LeftWrapper>
        <Title>Streams</Title>
        <OneToOne>
          <TextWrapper>
            <OneToOneTitle>
              <i className="material-icons">hearing</i>1-on-1
            </OneToOneTitle>
            <i onClick={handlerModalOpen} className="material-icons">
              add_circle
            </i>
          </TextWrapper>
          <StreamNav />
        </OneToOne>
      </LeftWrapper>
    </>
  );
};
