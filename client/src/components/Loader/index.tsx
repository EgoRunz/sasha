import { LoaderWrapper } from "./style";
export const Loader = () => {
  return (
    <LoaderWrapper>
      <div
        className="preloader-wrapper big active"
        style={{ width: "200px", height: "200px" }}
      >
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </LoaderWrapper>
  );
};
