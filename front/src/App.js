import React, { Component } from "react";
import Home from "./components/Home";
import styled from "styled-components";

export default function App() {
  const Wrapped = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.background};
  `;
  return (
    <Wrapped>
      <Home />
    </Wrapped>
  );
}
