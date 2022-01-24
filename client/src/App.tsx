// import React from "react";

import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { current } from "./api/auth/current";
import { AppRoutes } from "./AppRoutes";
import { Loader } from "./components/Loader";
import { AuthContext, User } from "./context/authContext";
const storageName = "fellowTokens";
function App() {
  const [user, setUserState] = useState<User>();

  const { isFetched, refetch } = useQuery("auth.current", current, {
    onSuccess: (data) => {
      setUserState(data?.data.user);
    },
    onError: (error) => {
      console.log(error);
      setUserState(undefined);
    },
  });

  const setToken = useCallback(
    (token) => {
      localStorage.setItem(
        storageName,
        JSON.stringify({
          accessToken: token,
        })
      );
      refetch();
    },
    [refetch]
  );

  const clearToken = useCallback(() => {
    localStorage.removeItem(storageName);
    refetch();
  }, [refetch]);
  if (!isFetched) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={{ setToken, clearToken, inited: false, user }}>
      <AppRoutes />
    </AuthContext.Provider>
  );
}

export default App;
