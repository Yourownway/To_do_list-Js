import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

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
  console.log(tasks);
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
}
