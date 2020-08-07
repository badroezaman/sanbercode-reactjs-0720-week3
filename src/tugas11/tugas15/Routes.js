import React from "react";
import UserInfo from "../../UserInfo";
import DaftarBuah from "../../tugas11/DaftarBuah";
import Timer from "../../tugas12/Timer";
import ListsClass from "../../tugas13/List";
import HooksLists from "../../tugas14/List";
import ListsContext from "./List";
import Movie from "./Movie";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/daftar-buah" component={DaftarBuah} />
      <Route path="/timer">
        <DaftarBuah />
        <Timer start={120} />
      </Route>
      <Route exact path="/list-class" component={ListsClass} />
      <Route exact path="/hooks-lists" component={HooksLists} />
      <Route exact path="/list-context" component={ListsContext} />
      <Route exact path="/movie" component={Movie} />
      <Route exact path="/" component={UserInfo} />
    </Switch>
  );
};

export default Routes;
