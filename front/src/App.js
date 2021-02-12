import React from "react";

import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Carousel from "./components/molecules/Carousel";
import Header from "./components/organims/Header";
import List from "./components/molecules/List";
export default function App() {
  const Wrapped = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
  `;
  return (
    <Wrapped>
      <Header />
      <Router>
        <Switch>
          {/* <Route path="/Auth"><Auth/></Route> */}
          <Route path="/Home">
            <Carousel />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Router>
    </Wrapped>
  );
}
