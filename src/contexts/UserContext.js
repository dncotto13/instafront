import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getOwnData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
          headers: { Authorization: token },
        });
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.message);
        }
        setUser(json.data);
      } catch (error) {
                setToken("");
                setUser(null);
      }
    };
    if (token) getOwnData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
