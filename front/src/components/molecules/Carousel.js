import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import * as theme from "../../config/theme";
export default function Carousel() {
  let [style, setStyle] = useState("");
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
  const selected = keyframes`{
      0%{
        
      }
      100%{
        transform: translateZ(600px);

      }
  }`;
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
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
    transition: transform 2s;

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

  const Button = styled.button`
    font-size: 1rem;
    color: black;
    width: 50px;
    height: 40px;
    background-color: white;
  `;

  let projects = ["0", "1", "2", "3", "4", "5"];
  const refCarousel = useRef(null);
  const refCard = useRef(null);
  const cellCount = projects.length;
  let selectedIndex = 0;
  let translate, angle;
  let clicked = true;
  const rotateCarousel = () => {
    let angle = (selectedIndex / cellCount) * -360;

    let child = refCarousel.current.children;

    translate = Math.round(
      child[0].clientWidth / Math.tan(Math.PI / cellCount)
    );

    refCarousel.current.style.transform =
      `translateZ(-${translate}px) rotateY(` + angle + "deg)";
  };

  const handleChange = (i) => {
    selectedIndex += i;
    rotateCarousel();
  };

  const handleClick = (e) => {
    e.preventDefault();

    let indexOfCard = parseInt(e.target.id.substring(5), 10);
    let angle = (selectedIndex / cellCount) * 180;

    if (indexOfCard === selectedIndex % projects.length) {
      if (clicked) {
        console.log(style, "style");
        e.target.style.transform += `scale(1.5) `;
        console.log(e);
        console.log(angle);
        return (clicked = false);
      }
      if (!clicked) {
        console.log(e.target.style.transform);
        e.target.style.transform = `rotateY(${
          (selectedIndex * 360) / projects.length
        }deg) translateZ(312px)`;
        console.log(e.target.style.transform);
        return (clicked = true);
      }
    }
  };
  useEffect(() => {
    // selectedIndex = 0;

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
            <Card
              id={`card_${projects.indexOf(x)}`}
              index={projects.indexOf(x)}
              ref={refCard}
              onClick={(e) => handleClick(e)}
              key={projects.indexOf(x)}
            >
              <h1>{projects.indexOf(x)}</h1>

              <Button
                onClick={(e) => {
                  console.log(e);
                }}
              >
                {" "}
                click me
              </Button>
            </Card>
          ))}
        </Cards>
      </Scene>
      <button onClick={() => handleChange(1)}>NEXT</button>
      <button onClick={() => handleChange(-1)}>Prev</button>
    </Wrapper>
  );
}
