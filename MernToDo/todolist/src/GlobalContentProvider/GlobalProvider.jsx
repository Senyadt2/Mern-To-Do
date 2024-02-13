import React, { useState } from "react";
import globalcontext from "./GlobalContext";
const GlobalProvider = ({ children }) => {
  const [dataChanged, setDataChanged] = useState();
  return (
    <globalcontext.Provider value={{ dataChanged, setDataChanged }}>
      {children}
    </globalcontext.Provider>
  );
};

export default GlobalProvider;
