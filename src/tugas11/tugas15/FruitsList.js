import React, { useContext, useState } from "react";
import { FruitsContext } from "./FruitsContext";
import axios from "axios";

const FruitsList = () => {
  const [dataHargaBuah, setDataHargaBuah] = useContext(FruitsContext);
  const [input, setInput] = useState({ nama: "", harga: "", berat: 0 });
  const [selectedID, setSelectedID] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);
    let newDataHargaBuah = dataHargaBuah.filter((el) => el.id !== idBuah);
    // console.log(newDataHargaBuah);

    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
      .then((res) => {
        console.log(res);
      });

    setDataHargaBuah([...newDataHargaBuah]);
  };

  const handleEdit = (event) => {
    event.preventDefault();

    let idBuah = parseInt(event.target.value);
    let buah = dataHargaBuah.find((el) => el.id === idBuah);
    console.log(buah);
    setInput({ nama: buah.nama, harga: buah.harga, berat: buah.berat });
    setSelectedID(idBuah);
    setStatusForm("edit");
  };

  return (
    <>
      <h1>Daftar Harga Buah [Tugas - 15]</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
          {dataHargaBuah !== null &&
            dataHargaBuah.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.nama}</td>
                  <td>Rp {val.harga}</td>
                  <td>{val.berat / 1000} kg</td>
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
