// src/pages/Stats.jsx
import React from "react";
import { useTasks } from "../store/useTasks";

const Stats = () => {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Task Statistics</h1>
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Remaining Tasks: {remaining}</p>
    </div>
  );
};

export default Stats;
