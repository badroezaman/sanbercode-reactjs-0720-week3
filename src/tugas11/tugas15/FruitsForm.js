import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { FruitsContext } from "./FruitsContext";

const FruitsForm = () => {
  const [dataHargaBuah, setDataHargaBuah] = useContext(FruitsContext);
  const [input, setInput] = useState({ name: "", price: "", weight: 0 });

  useEffect(() => {
    if (dataHargaBuah.statusForm === "changeToEdit") {
      let dataBuah = dataHargaBuah.lists.find(
        (x) => x.id === dataHargaBuah.selectedId
      );
      setInput({
        name: dataBuah.name,
        price: dataBuah.price,
        weight: dataBuah.weight,
      });
      setDataHargaBuah({ ...dataHargaBuah, statusForm: "edit" });
    }
  }, [dataHargaBuah]);

  const handleChangeName = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, name: newValue });
  };
  const handleChangePrice = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, price: newValue });
  };
  const handleChangeWeight = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, weight: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let name = input.name;
    let price = input.price.toString();

    if (name.replace(/\s/g, "") !== "" && price.replace(/\s/g, "") !== "") {
      if (dataHargaBuah.statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/fruits`, {
            name: input.name,
            price: input.price,
            weight: input.weight,
          })
          .then((res) => {
            console.log(res);
            setDataHargaBuah({
              statusForm: "create",
              selectedID: 0,
              lists: [
                ...dataHargaBuah.lists,
                {
                  id: res.data.id,
                  name: input.name,
                  price: input.price,
                  weight: input.weight,
                },
              ],
            });
          });
      } else if (dataHargaBuah.statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/fruits/${dataHargaBuah.selectedID}`,
            {
              name: input.name,
              price: input.price,
              weight: input.weight,
            }
          )
          .then(() => {
            let dataBuah = dataHargaBuah.lists.find(
              (el) => el.id === dataHargaBuah.selectedID
            );
            dataBuah.name = input.name;
            dataBuah.price = input.price;
            dataBuah.weight = input.weight;
            setDataHargaBuah({
              statusForm: "create",
              selectedID: 0,
              lists: [...dataHargaBuah.lists],
            });
          });
      }

      setInput({ name: "", price: "", weight: 0 });
    }
  };

  return (
    <>
      <h1>Form Tambah Buah</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label>Nama</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChangeName}
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
              name="price"
              value={input.price}
              onChange={handleChangePrice}
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
              name="weight"
              value={input.weight}
              onChange={handleChangeWeight}
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
};

export default FruitsForm;
