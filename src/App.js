import React from "react";
import "./App.css";
// import UserInfo from "./UserInfo";
import Header from "./Header";
import DaftarBuah from "./tugas11/DaftarBuah";
import Timer from "./tugas12/Timer";
import Lists from "./tugas13/List";

function App() {
  return (
    <>
      <Header />
      {/* <div className="Title">
        <h1>Tabel Harga Buah</h1>
      </div> */}
      <div className="container">
        <Lists />
      </div>
      <div className="container">
        <DaftarBuah />
      </div>
      <div className="container">
        <Timer start={120} />
      </div>
    </>
  );
}

export default App;
