import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initTaskData from "./data";
import Column from "../atoms/Column";
export default function List() {
  let [state, setState] = useState(initTaskData);

  return <Column />;
}
