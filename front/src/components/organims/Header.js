import React from "react";
import Nav from "../molecules/Nav";
import styled from "styled-components";
export default function Header() {
  const Wrapper = styled.div`
    border: solid red;
    height: 15vh;
    width: 100%;
    background-color: ${(props) => props.theme.green};
  `;
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
}
