import React, { useContext, useEffect } from "react";
import axios from "axios";
import { FruitsContext } from "./FruitsContext";

const FruitsList = () => {
  const [dataHargaBuah, setDataHargaBuah] = useContext(FruitsContext);

  useEffect(() => {
    if (dataHargaBuah.lists === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setDataHargaBuah({
            ...dataHargaBuah,
            lists: res.data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                price: el.price,
                weight: el.weight,
              };
            }),
          });
        });
    }
  }, [setDataHargaBuah]);

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value);
    setDataHargaBuah({
      ...dataHargaBuah,
      selectedId: idBuah,
      statusForm: "changeToEdit",
    });
  };

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    let newLists = dataHargaBuah.lists.filter((el) => el.id !== idBuah);
    // console.log(newLists);

    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        console.log(res);
      });

    setDataHargaBuah({ ...dataHargaBuah, lists: [...newLists] });
  };

  return (
    <>
      <h1>Daftar Harga Buah [Tugas - 15]</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
          {dataHargaBuah.lists !== null &&
            dataHargaBuah.lists.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>Rp {val.price}</td>
                  <td>{val.weight / 1000} kg</td>
                  <td>
                    <button onClick={handleEdit} value={val.id}>
                      Edit
                    </button>
                    &nbsp;
                    <button onClick={handleDelete} value={val.id}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default FruitsList;
