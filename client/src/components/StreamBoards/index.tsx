import { useParams } from "react-router-dom";
import { UserWrap } from "./style";
import { Board } from "../Board";
import { useMutation, useQuery } from "react-query";
import { createBoard } from "../../api/boards/createBoard";
import { Loader } from "../Loader";
import { getBoardsByStreamId } from "../../api/boards/getStreamBoardsList";
// import { getStreamById } from "../../api/streams/getStreamById";

export const StreamBoards = () => {
  const { id }: { id: string } = useParams();

  // const { data } = useQuery(["streamById", id], () => getStreamById(id));

  const query = useQuery(["boardsByStreamId", id], () =>
    getBoardsByStreamId({ id })
  );
  console.log(query);
  const { mutate } = useMutation("createBoard", createBoard, {
    onSuccess: (data) => {
      query.refetch();
    },
  });

  if (query.isError) {
    return <div>error...</div>;
  }

  if (query.isLoading) {
    return <Loader />;
  }

  return (
    <UserWrap>
      <button
        onClick={() => {
          mutate({ id });
        }}
      >
        +
      </button>
      {/* переназначить тип */}
      {query.data?.data.map((item: any) => {
        return <Board item={item} key={item.id} />;
      })}
    </UserWrap>
  );
};
