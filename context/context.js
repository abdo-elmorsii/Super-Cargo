import { createContext, useState } from "react";
export const mcontext = createContext();

export const ProvideContext = ({ children }) => {
  const [user, setuser] = useState("");
   
  return (
    <mcontext.Provider value={{ user, setuser}}>{children}</mcontext.Provider>
  );
};
