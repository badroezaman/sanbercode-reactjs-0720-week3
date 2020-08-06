import React, { Component, useState } from "react";

const List = () => {
  const [dataHargaBuah, setDataHargaBuah] = useState([
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ]);
  const [inputName, setInputName] = useState("");
  const [InputPrice, setInputPrice] = useState("");
  const [InputWeight, setInputWeight] = useState("");
  const [indexOfForm, setIndexOfForm] = useState(-1);
};

const handleDelete = () => {
  let index = event.target.value;
  let newDataHargaBuah = dataHargaBuah;
  let editedBuah = newDataHargaBuah[indexOfForm];
  newDataHargaBuah.splice(index, 1);
  // console.log(newDataHargaBuah);

  if (editedBuah !== undefined) {
    var newIndex = newDataHargaBuah.findIndex((el) => el === editedBuah);
    setDataHargaBuah([...newDataHargaBuah]);
    setIndexOfForm(newIndex);
  } else {
    setDataHargaBuah([...newDataHargaBuah]);
  }
};

const handleEdit = () => {
  let index = event.target.value;
  let buah = dataHargaBuah[index];
  console.log(buah);
  setInputName(buah.nama);
  setInputPrice(buah.harga);
  setInputWeight(buah.berat);
  setIndexOfForm(index);
};

const handleChange = () => {
  let change = {};
  change[event.target.name] = event.target.value;
  change();
};

const handleSubmit = () => {
  event.preventDefault();

  let name = inputName;
  let price = inputPrice;
  let weight = inputWeight;

  if (
    name.replace(/\s/g, "") !== "" &&
    price.toString().replace(/\s/g, "") !== "" &&
    weight.toString().replace(/\s/g, "") !== ""
  ) {
    let newDataHargaBuah = dataHargaBuah;
    let index = indexOfForm;

    if (index === -1) {
      newDataHargaBuah = [
        ...newDataHargaBuah,
        {
          nama: name,
          harga: price,
          berat: weight,
        },
      ];
    } else {
      newDataHargaBuah[index] = {
        nama: name,
        harga: price,
        berat: weight,
      };
    }

    // console.log(dataHargaBuah);

    setDataHargaBuah(newDataHargaBuah);
    setInputName("");
    setInputPrice("");
    setInputWeight("");
  }
};

return (
  <>
    <h1>Daftar Harga Buah</h1>
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
        {dataHargaBuah.map((val, index) => {
          return (
            <tr key={index}>
              <td>{val.nama}</td>
              <td>Rp {val.harga}</td>
              <td>{val.berat / 1000} kg</td>
              <td>
                <button onClick={handleEdit} value={index}>
                  Edit
                </button>
                &nbsp;
                <button onClick={handleDelete} value={index}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    {/* Form */}
    <h1>Form Tambah Buah</h1>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-25">
          <label>Nama</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="inputName"
            value={inputName}
            onChange={handleChange}
            placeholder="Nama Buah"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Harga</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="inputPrice"
            value={inputPrice}
            onChange={handleChange}
            placeholder="Harga Buah"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Berat</label>
        </div>
        <div className="col-75">
          <input
            type="text"
            name="inputWeight"
            value={inputWeight}
            onChange={handleChange}
            placeholder="Satuan Gram"
          />
        </div>
      </div>
      <div className="row">
        <button type="submit">Submit</button>
      </div>
    </form>
  </>
);

export default List;
