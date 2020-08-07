import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const FruitsContext = createContext();

export const FruitsProvider = (props) => {
  const [dataHargaBuah, setDataHargaBuah] = useState(null);

  useEffect(() => {
    if (dataHargaBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHargaBuah(
            res.data.map((el) => {
              return {
                id: el.id,
                nama: el.name,
                harga: el.price,
                berat: el.weight,
              };
            })
          );
        });
    }
  }, [dataHargaBuah]);

  return (
    <FruitsContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </FruitsContext.Provider>
  );
};
