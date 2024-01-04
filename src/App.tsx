import React, { FC, ChangeEvent, useState, useEffect } from "react";
import "./App.css";
import TodoTask from "./Components/todo-task";
import { ITask } from "./Components/interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setTaskDate(today);
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      setDeadline(String(event.target.value));
    } else if (event.target.name === "taskDate") {
      setTaskDate(String(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, taskDate: taskDate, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(""); // Clear the deadline state
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header column1">
        <img
          className="header-image"
          src="https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Free-Image.png"
          alt="Green Tick"
        />
        <div className="inputContainer">
          <input
            className="taskInput"
            type="text"
            placeholder="Task..."
            name="task"
            maxLength={100}
            value={task}
            onChange={handleChange}
          />
          {/* <input
            type="date"
            name="taskDate"
            value={taskDate}
            onChange={handleChange}
          /> */}
          <input
            type="date"
            placeholder="Completion Date"
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add</button>
        </div>
      </div>
      <div className="todoList column2">
        {todoList
          .slice()
          .reverse()
          .map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
      </div>
    </div>
  );
};

export default App;
