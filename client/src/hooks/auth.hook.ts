import { useContext } from "react";
import { AuthContext } from "../context/authContext";

// export const useAuth = () => {
//   const [token, setToken] = useState(null);
//   const [userId, setUserId] = useState(null);

//   const login = useCallback((jwtToken, id) => {
//     setToken(jwtToken);
//     setUserId(id);
//     localStorage.setItem(
//       storageName,
//       JSON.stringify({
//         token: jwtToken,
//         userId: id,
//       })
//     );
//   }, []);

//   const logout = useCallback(() => {
//     setToken(null);
//     setUserId(null);
//     localStorage.removeItem(storageName);
//   }, []);

//   useEffect(() => {
//     let data = localStorage.getItem(storageName);
//     let res: { token: string; userId: string } = { token: "", userId: "" };
//     if (data) {
//       res = JSON.parse(data);
//     }
//     if (res?.token && res?.userId) {
//       login(res.token, res.userId);
//     }
//   }, [login]);
//   return { login, logout, token, userId };
// };

export const useAuth = (): boolean => {
  const { user } = useContext(AuthContext);
  return Boolean(user);
};
