import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <ul style={{ listStyle: "none", display: "inline-flex", padding: "0" }}>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/daftar-buah"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Daftar Buah
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/timer"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Timer
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/list-class"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              List Class
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/hooks-lists"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Hooks Lists
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/list-context"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              List Context
            </Link>
          </li>
          <li
            style={{
              padding: ".5em 1em",
              borderBottom: ".1em solid #f9e03c",
              margin: "0 .1em",
            }}
          >
            <Link
              to="/movie"
              style={{
                textDecoration: "none",
                color: "#003366",
                fontWeight: "bold",
              }}
            >
              Movie
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;