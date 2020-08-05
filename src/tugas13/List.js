import React, { Component } from "react";
// import "./Lists.css";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      inputName: "",
      inputPrice: "",
      inputWeight: "",
      indexOfForm: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChangeName = this.handleChangeName.bind(this);
    // this.handleChangePrice = this.handleChangePrice.bind(this);
    // this.handleChangeWeight = this.handleChangeWeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    let index = event.target.value;
    let newDataHargaBuah = this.state.dataHargaBuah;
    let editedBuah = newDataHargaBuah[this.state.indexOfForm];
    newDataHargaBuah.splice(index, 1);
    // console.log(newDataHargaBuah);

    if (editedBuah !== undefined) {
      var newIndex = newDataHargaBuah.findIndex((el) => el === editedBuah);
      this.setState({ dataHargaBuah: newDataHargaBuah, indexOfForm: newIndex });
    } else {
      this.setState({ dataHargaBuah: newDataHargaBuah });
    }
  }

  handleEdit(event) {
    let index = event.target.value;
    let buah = this.state.dataHargaBuah[index];
    console.log(buah);
    this.setState({
      inputName: buah.nama,
      inputPrice: buah.harga,
      inputWeight: buah.berat,
      indexOfForm: index,
    });
  }

  handleChange(event) {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  }

  // handleChangeName(event) {
  //   this.setState({ inputName: event.target.value });
  // }
  // handleChangePrice(event) {
  //   this.setState({ inputPrice: event.target.value });
  // }
  // handleChangeWeight(event) {
  //   this.setState({ inputWeight: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault();

    let name = this.state.inputName;
    let price = this.state.inputPrice;
    let weight = this.state.inputWeight;

    if (
      name.replace(/\s/g, "") !== "" &&
      price.toString().replace(/\s/g, "") !== "" &&
      weight.toString().replace(/\s/g, "") !== ""
    ) {
      let newDataHargaBuah = this.state.dataHargaBuah;
      let index = this.state.indexOfForm;

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

      this.setState({
        dataHargaBuah: newDataHargaBuah,
        //   dataHargaBuah: [
        //     ...this.state.dataHargaBuah,
        //     {
        //       nama: this.state.inputName,
        //       harga: this.state.inputPrice,
        //       berat: this.state.inputWeight,
        //     },
        //   ],
        inputName: "",
        inputPrice: "",
        inputWeight: "",
      });
    }
  }

  render() {
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
            {this.state.dataHargaBuah.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.nama}</td>
                  <td>Rp {val.harga}</td>
                  <td>{val.berat / 1000} kg</td>
                  <td>
                    <button onClick={this.handleEdit} value={index}>
                      Edit
                    </button>
                    &nbsp;
                    <button onClick={this.handleDelete} value={index}>
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
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label>Nama</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="inputName"
                value={this.state.inputName}
                onChange={this.handleChange}
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
                value={this.state.inputPrice}
                onChange={this.handleChange}
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
                value={this.state.inputWeight}
                onChange={this.handleChange}
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
  }
}

export default Lists;
