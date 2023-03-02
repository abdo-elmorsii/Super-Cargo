import { createContext, useState } from "react";
export const mcontext = createContext();

export const ProvideContext = ({ children }) => {
  const [user, setuser] = useState(null);
   
  return (
    <mcontext.Provider value={{ user, setuser,id:"6" }}>{children}</mcontext.Provider>
  );
};
