import React from "react";
import "./App.css";
// import UserInfo from "./UserInfo";
import Table from "./tugas11/Table";
// import Timer from "./tugas12/Timer";
import Counter from "./tugas12/Counter";
// import Clock from "./tugas12/Clock";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Tabel Harga Buah</h1>
      </div>
      <div className="container">
        <Table />
      </div>
      <div className="container">
        <Counter />
      </div>

      {/* <div className="container">
        <div className="col">
          <div className="item">
            <Clock />
          </div>
        </div>
        <div className="col">
          <div className="item counter">
            <Counter />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
