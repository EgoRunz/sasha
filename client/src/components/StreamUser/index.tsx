import { useHistory, useParams } from "react-router-dom";
import { Wrapper } from "./style";

interface Props {
  userId: number;
}

export const StreamUser = ({ userId }: Props) => {
  const history = useHistory();
  const params = useParams();
  console.log(params, "kek");

  return (
    <Wrapper
      onClick={() => {
        history.push(`/streams/${userId}`);
      }}
    >
      <h2>{userId}</h2>
    </Wrapper>
  );
};
