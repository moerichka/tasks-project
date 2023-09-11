import React from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { completeTask } from "../../store/tasksSlice";

import s from "./Task.module.scss";

function Task({ id, title, text, date, isDone }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const checkIsDone = (e) => {
    e.preventDefault();
    dispatch(completeTask(id));

    if (isDone) {
      enqueueSnackbar({
        message: "Task is now not completed",
        variant: "default",
      });
    } else {
      enqueueSnackbar({ message: "Task is now completed", variant: "success" });
    }
  };

  return (
    <div id={id} className={`${s.task} ${isDone ? s.isDone : ""}`}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <h5 className={s.date}>{date}</h5>
      <button onClick={checkIsDone} className={s.button}>
        {isDone ? "ВЫПОЛНЕНО" : "ВЫПОЛНИТЬ"}
      </button>
    </div>
  );
}

export default Task;
