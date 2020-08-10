import React from "react";
import { Switch, Route } from "react-router-dom";
import DaftarBuah from "../../tugas11/DaftarBuah";
import Timer from "../../tugas12/Timer";
import ListsClass from "../../tugas13/List";
import HooksLists from "../../tugas14/List";
import ListsContext from "./Fruits";
import Nav from "./Nav";
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Switch>
          <Route path="/timer">
            <DaftarBuah />
            <Timer start={120} />
          </Route>
          <Route exact path="/list-class" component={ListsClass} />
          <Route exact path="/hooks-lists" component={HooksLists} />
          <Route exact path="/list-context" component={ListsContext} />
          <Route exact path="/" component={DaftarBuah} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

// export default Routes;
