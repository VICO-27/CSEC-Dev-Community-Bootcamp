// src/components/TaskList.jsx
import React from "react";
import { useTasks } from "../store/useTasks";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();

  if (!tasks.length) return <p>No tasks yet!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
