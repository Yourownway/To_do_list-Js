import React, { useCallback, useEffect, useState } from "react";
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
        {state.columnOrder.map((columnId) => {
          column = state.columns[columnId];
          tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

          return (
            <Column
              key={column.id}
              column={state.columns[columnId]}
              tasks={tasks}
            />
          );
        })}
      </Wrapper>
    </>
  );
}
