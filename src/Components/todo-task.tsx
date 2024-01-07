import React from "react";
import { ITask } from "./interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="tasks">
      <div className="content">
        <span className="todo1">{task.taskName}</span>
        <span className="todo2">{task.taskDate}</span>
        <span className="todo3">{task.deadline}</span>
        <button
          onClick={() => {
            completeTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
