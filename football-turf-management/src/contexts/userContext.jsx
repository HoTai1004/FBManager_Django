import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateApi } from "../api/mock-api";
import { cLocalStorage } from "../utils/localStorage";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const lsUser = cLocalStorage("user");
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ user: lsUser.get() });

  const signIn = async ({ username, password }) => {
    const user = await authenticateApi.signIn({ username, password });
    setAuth({ user });
    lsUser.set(user);
    return user;
  };

  const signOut = () => {
    setAuth(null);
    lsUser.set(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user: auth?.user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
