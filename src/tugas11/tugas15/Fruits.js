import React from "react";
import { FruitsProvider } from "./FruitsContext";
import FruitsList from "./FruitsList";
import FruitsForm from "./FruitsForm";

const Fruits = () => {
  return (
    <>
      <div className="container">
        <FruitsProvider>
          <FruitsList />
          <FruitsForm />
        </FruitsProvider>
      </div>
    </>
  );
};

export default Fruits;
