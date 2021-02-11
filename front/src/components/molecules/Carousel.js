import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
export default function Carousel() {
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid blue;
  `;
  const Scene = styled.div`
    position: relative;
    width: 210px;
    height: 300px;
    margin: auto;
    perspective: 1000px;
  `;

  const Cards = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateZ(-288px);
    transform-style: preserve-3d;
    transition: transform 1s;
    background-color: red;
  `;

  const Card = styled.div`
    position: absolute;
    width: 190px;
    height: 300px;
    left: 10px;
    top: 10px;
    border: 2px solid black;
    line-height: 116px;
    font-size: 80px;
    font-weight: bold;
    color: white;
    text-align: center;
    transition: transform 1s, opacity 1s;
    background-color: red;
  `;
  let projects = ["1", "2", "3", "4", "5"];
  const refCarousel = useRef(null);

  const cellCount = projects.length;
  let selectedIndex = 0;
  let translate, angle;
  const rotateCarousel = () => {
    let angle = (selectedIndex / cellCount) * -360;
    let child = refCarousel.current.children;
    translate = Math.round(
      (child[0].clientWidth / 2 / Math.tan(Math.PI / cellCount)) * 2
    );
    refCarousel.current.style.transform =
      `translateZ(-${translate}px) rotateY(` + angle + "deg)";
  };
  const handleChange = (i) => {
    selectedIndex += i;
    rotateCarousel();
  };
  useEffect(() => {
    let child = refCarousel.current.children;
    translate =
      Math.round(child[0].clientWidth / 2 / Math.tan(Math.PI / cellCount)) * 2;

    for (let i = 0; i < projects.length; i++) {
      angle = (i / cellCount) * 360;

      child[i].style.transform =
        " rotateY(" + angle + `deg) translateZ(${translate}px)`;
    }
  }, []);
  return (
    <Wrapper>
      <Scene>
        <Cards ref={refCarousel}>
          {projects.map((x) => (
            <Card key={projects.indexOf(x)}>{projects.length}</Card>
          ))}
        </Cards>
      </Scene>
      <button onClick={() => handleChange(1)}>NEXT</button>
      <button onClick={() => handleChange(-1)}>Prev</button>
    </Wrapper>
  );
}
