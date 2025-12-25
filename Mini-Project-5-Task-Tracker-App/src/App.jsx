import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskProvider from "./store/TaskProvider";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <TaskProvider>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "#fff",
          color: darkMode ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TaskProvider>
  );
}

export default App;
