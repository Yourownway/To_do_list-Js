import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initTaskData from "./data";
import Column from "../atoms/Column";
import styled from "styled-components";
export default function List() {
  let [state, setState] = useState(initTaskData);
  let column, tasks;
  const Wrapper = styled.div`
    border: solid red;
    height: 100vh;
    width: 100%;
    background-color: ${(props) => props.theme.green};
  `;
  return (
    <>
      <Wrapper>
        <h1>hello</h1>
        {state.columnOrder.map((columnId) => {
          column = state.columns[columnId];
          tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return <Column column={state.columns[columnId]} tasks={tasks} />;
        })}
      </Wrapper>
    </>
  );
}
