import React, { Component } from "react";

class ShowName extends Component {
  render() {
    return `${this.props.nama}`;
  }
}
class ShowPrice extends Component {
  render() {
    return `${this.props.harga}`;
  }
}
class ShowWeight extends Component {
  render() {
    return `${this.props.berat}`;
  }
}

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nama</th>
        <th>Harga</th>
        <th>Berat</th>
      </tr>
    </thead>
  );
};

class TableBody extends Component {
  render() {
    return (
      <>
        {dataHargaBuah.map((el) => {
          return (
            <tbody>
              <tr>
                <td>
                  <ShowName nama={el.nama} />
                </td>
                <td>
                  <ShowPrice harga={el.harga} />
                </td>
                <td>
                  <ShowWeight berat={el.berat / 1000 + " kg"} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
