import { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AddStreamModal } from "../../components/AddStreamModal";
import { Navigation } from "../../components/Navbar";
import { StreamAside } from "../../components/StreamAside";
import { StreamBoards } from "../../components/StreamBoards";
import { AuthContext } from "../../context/authContext";
import { Wrapper, CurrentUser, Button } from "./style";

export function Stream() {
  const { clearToken } = useContext(AuthContext);
  const [isModalOpen, setModalState] = useState(false);

  const handlerModalClose = () => setModalState(false);
  const handlerModalOpen = () => setModalState(true);
  const handleUserAdd = () => setModalState(true);

  return (
    <>
      <Navigation title={"Go stream?"} />
      <Wrapper>
        <StreamAside handlerModalOpen={handlerModalOpen} />
        <Switch>
          <Route path="/streams/:id">
            <StreamBoards />
          </Route>
        </Switch>

        <AddStreamModal
          isOpen={isModalOpen}
          onClose={handlerModalClose}
          onUserAdd={handleUserAdd}
        />
        <CurrentUser>
          <Button
            className="btn"
            onClick={() => {
              clearToken();
            }}
          >
            log out
          </Button>
        </CurrentUser>
      </Wrapper>
    </>
  );
}
