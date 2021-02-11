import React, { useEffect, useRef, useState } from "react";
import { data as projects } from "../../FakeDb/projectsData";
export default function Carousel() {
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
    <>
      <div className="projects__scene">
        <div ref={refCarousel} className="projects__carousel">
          {projects.map((x) => (
            <div key={projects.indexOf(x)} className="projects__carousel__cell">
              {projects.length}
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => handleChange(1)}>NEXT</button>
      <button onClick={() => handleChange(-1)}>Prev</button>
    </>
  );
}
