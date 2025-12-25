// src/components/TaskItem.jsx
import React from "react";
import { useTasks } from "../store/useTasks";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: task.completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          style={{ marginRight: "0.5rem" }}
        />
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
        </span>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
