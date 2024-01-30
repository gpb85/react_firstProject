import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = "George";
  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
