import { useQuery } from "react-query";
import { streams } from "../../api/streams/streams";
import { Loader } from "../Loader";
import { StreamUser } from "../StreamUser";

import { Root } from "./style";

export const StreamNav = () => {
  const { data, isLoading, isSuccess } = useQuery("streams", streams);
  if (isLoading) {
    return <Loader />;
  }
  if (!isSuccess) {
    return <div>error</div>;
  }
  return (
    <>
      <Root>
        {data?.data.map((stream) => (
          <StreamUser key={stream.id} userId={stream.id} />
        ))}
      </Root>
    </>
  );
};
