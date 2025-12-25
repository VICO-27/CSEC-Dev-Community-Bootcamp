import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
