import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
export default function Carousel() {
  const Wrapper = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid blue;
  `;
  const Scene = styled.div`
    position: relative;
    border: solid red;
    width: 210px;
    height: 300px;
    margin: auto;
    perspective: 1000px;
  `;

  const Cards = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    border: solid green;
    transform: translateZ(-288px);
    transform-style: preserve-3d;
    transition: transform 1s;
  `;
  const light = keyframes` {
    0% {
      transform: translateX(-90px) translateY(0px);
    }
    25% {
      transform: translateX(90px) translateY(0px);
    }
    50% {
      transform: translateY(300px) translateX(90px);
    }
    75% {
      transform: translateY(300px) translateX(-90px);
    }
    100% {
      transform: translateY(0px) translateX(-90px);
    }
  }`;
  const Card = styled.div`
    cursor: pointer;
    position: absolute;
    border: solid white;
    width: 180px;
    height: 300px;
    left: 0px;
    top: 10px;
    /* border: 2px solid black; */
    line-height: 116px;
    font-size: 80px;
    font-weight: bold;
    color: white;
    text-align: center;
    /* transition: transform 1s, opacity 1s; */
    background-color: blue;
    opacity: 0.5;
    &:hover {
      background-color: red;
    }
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 80px;
      top: -10px;
      animation: ${light} 5s linear infinite;
      /* filter: blur(4px); */
      background: radial-gradient(white, transparent);
    }
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
            <Card onClick={(e) => console.log(e)} key={projects.indexOf(x)}>
              {projects.length}
            </Card>
          ))}
        </Cards>
      </Scene>
      <button onClick={() => handleChange(1)}>NEXT</button>
      <button onClick={() => handleChange(-1)}>Prev</button>
    </Wrapper>
  );
}
