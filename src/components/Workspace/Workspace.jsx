import React from "react";
import { useSelector } from "react-redux";

import Task from "../Task";

import s from "./Workspace.module.scss";

function Workspace() {
  const { tasks } = useSelector((state) => state.tasks);

  return (
    <div className={s.workspace}>
      {tasks.toReversed().map((item) => (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          date={item.date}
          isDone={item.isDone}
        />
      ))}
    </div>
  );
}

export default Workspace;
