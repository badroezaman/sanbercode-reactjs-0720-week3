import React, { useContext } from "react";
import { FruitsProvider } from "./FruitsContext";
import FruitsList from "./FruitsList";
import FruitsForm from "./FruitsForm";
import { ThemeContext } from "./ThemeContext";

const Fruits = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="container">
        <button onClick={changeTheme}>
          {" "}
          Change Navbar to {theme === "dark" ? "Light Theme" : "Dark Theme"}
        </button>
        <FruitsProvider>
          <FruitsList />
          <FruitsForm />
        </FruitsProvider>
      </div>
    </>
  );
};

export default Fruits;
