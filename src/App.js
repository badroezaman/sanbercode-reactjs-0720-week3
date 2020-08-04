import React from "react";
import "./App.css";
// import UserInfo from "./UserInfo";
import Header from "./Header";
import DaftarBuah from "./tugas11/DaftarBuah";
import Timer from "./tugas12/Timer";
import Clock from "./tugas12/Clock";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Title">
        <h1>Tabel Harga Buah</h1>
      </div>
      <div className="container">
        <DaftarBuah />
      </div>
      <div className="container">
        <Clock />
        <Timer start={120} />
      </div>
    </div>
  );
}

export default App;
