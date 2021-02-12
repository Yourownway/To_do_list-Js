import React from "react";
import styled from "styled-components";

export default function Column({ tasks }) {
  const Container = styled.div``;
  const Title = styled.h3``;
  const TaskList = styled.div``;

  return (
    <Container>
      <TaskList>task go here</TaskList>
    </Container>
  );
}
