// src/components/TaskInput.jsx
import React, { useState } from "react";
import { useTasks } from "../store/useTasks";

const TaskInput = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    addTask(text);
    setText(""); // clear input
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new task"
        style={{ padding: "0.5rem", width: "60%" }}
      />
      <button
        onClick={handleAdd}
        style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
