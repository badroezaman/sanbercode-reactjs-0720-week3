import React, { useContext, useState } from "react";
import { FruitsContext } from "./FruitsContext";
import axios from "axios";

const FruitsForm = () => {
  const [input, setInput] = useState({ nama: "", harga: "", berat: "" });
  const [selectedID, setSelectedID] = useState(0);
  const [statusForm, setStatusForm] = useState("create");
  const [dataHargaBuah, setDataHargaBuah] = useContext(FruitsContext);

  //   useEffect(() => {
  //     if (dataHargaBuah === null) {
  //       axios
  //         .get(`http://backendexample.sanbercloud.com/api/fruits`)
  //         .then((res) => {
  //           setDataHargaBuah(
  //             res.data.map((el) => {
  //               return {
  //                 id: el.id,
  //                 nama: el.name,
  //                 harga: el.price,
  //                 berat: el.weight,
  //               };
  //             })
  //           );
  //         });
  //     }
  //   }, [dataHargaBuah]);

  //   const handleDelete = (event) => {
  //     let idBuah = parseInt(event.target.value);
  //     let newDataHargaBuah = dataHargaBuah.filter((el) => el.id !== idBuah);
  //     // console.log(newDataHargaBuah);

  //     axios
  //       .delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
  //       .then((res) => {
  //         console.log(res);
  //       });

  //     setDataHargaBuah([...newDataHargaBuah]);
  //   };

  //   const handleEdit = (event) => {
  //     let idBuah = parseInt(event.target.value);
  //     let buah = dataHargaBuah.find((el) => el.id === idBuah);
  //     console.log(buah);
  //     setInput({ nama: buah.nama, harga: buah.harga, berat: buah.berat });
  //     setSelectedID(idBuah);
  //     setStatusForm("edit");
  //   };

  const handleChangeName = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, nama: newValue });
  };
  const handleChangePrice = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, harga: newValue });
  };
  const handleChangeWeight = (event) => {
    const newValue = event.target.value;
    setInput({ ...input, berat: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let name = input.nama;
    let price = input.harga;
    let weight = input.berat;

    if (
      name.replace(/\s/g, "") !== "" &&
      price.toString().replace(/\s/g, "") !== "" &&
      weight.toString().replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/fruits`, {
            name,
            price,
            weight,
          })
          .then((res) => {
            console.log(res);
            setDataHargaBuah([
              ...dataHargaBuah,
              { id: res.data.id, nama: name, harga: price, berat: weight },
            ]);
          });
      } else if (statusForm === "edit") {
        axios
          .put(
            `http://backendexample.sanbercloud.com/api/fruits/${selectedID}`,
            {
              name,
              price,
              weight,
            }
          )
          .then((res) => {
            console.log(res);
            let dataBuah = dataHargaBuah.find((el) => el.id === selectedID);
            dataBuah.nama = name;
            dataBuah.harga = price;
            dataBuah.berat = weight;
            setDataHargaBuah([...dataHargaBuah]);
          });
      }

      setStatusForm("create");
      setSelectedID(0);
      setInput({ nama: "", harga: "", berat: "" });
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
              name="nama"
              value={input.nama}
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
              name="harga"
              value={input.harga}
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
              name="berat"
              value={input.berat}
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
