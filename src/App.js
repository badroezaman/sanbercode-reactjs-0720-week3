import React from "react";
import "./App.css";
// import UserInfo from "./UserInfo";
import Header from "./Header";
import DaftarBuah from "./tugas11/DaftarBuah";
// import DaftarBuah from "./tugas13/DaftarBuah";
// import Lists from "./tugas13/List";
import Timer from "./tugas12/Timer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Title">
        <h1>Tabel Harga Buah</h1>
      </div>
      {/* <div className="container">
        <Lists />
      </div> */}
      <div className="container">
        <DaftarBuah />
      </div>
      <div className="container">
        <Timer start={120} />
      </div>
    </div>
  );
}

export default App;
