import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import initTaskData from "../molecules/data";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;
export default function Task({ task, index }) {
  console.log(task, index, "Task");
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>task.content</p>
        </div>
      )}
    </Draggable>
  );
}
