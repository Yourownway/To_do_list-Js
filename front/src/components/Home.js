import React, { Component } from "react";
import Carousel from "./molecules/Carousel";
import Header from "./organims/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
      </div>
    );
  }
}
