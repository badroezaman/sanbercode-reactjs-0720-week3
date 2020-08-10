import React, { useState, createContext } from "react";

export const FruitsContext = createContext();

export const FruitsProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create",
  });

  return (
    <FruitsContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </FruitsContext.Provider>
  );
};
