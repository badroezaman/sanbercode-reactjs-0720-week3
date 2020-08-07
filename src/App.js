import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// import UserInfo from "./UserInfo";
import Header from "./Header";
import Routes from "./tugas11/tugas15/Routes";
import Nav from "./tugas11/tugas15/Nav";
// import Lists from "./tugas11/tugas15/List";
// import DaftarBuah from "./tugas11/DaftarBuah";
// import Timer from "./tugas12/Timer";
// import Lists from "./tugas13/List";
// import Lists from "./tugas14/List";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className="Title">
        <h1>Tabel Harga Buah</h1>
      </div> */}
        {/* <Lists />
        <div className="container">
          <DaftarBuah />
        </div>
        <div className="container">
          <Timer start={120} />
        </div> */}
        <Nav />
        <Routes />
        {/* <Lists /> */}
      </div>
    </Router>
  );
}

export default App;
