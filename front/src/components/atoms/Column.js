import React from "react";
import styled from "styled-components";
import Task from "./Task";

export default function Column({ column, tasks }) {
  console.log(tasks, "taskkkkkk");
  const Container = styled.div`
    width: 200px;
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
  `;
  const Title = styled.h3`
    padding: 8px;
  `;
  const TaskList = styled.div`
    padding: 8px;
  `;

  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
}
