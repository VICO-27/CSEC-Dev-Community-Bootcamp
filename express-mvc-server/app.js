const express = require("express");
const app = express();

// Import routes
const mainRoutes = require("./routes/mainRoutes");

// Middleware to parse JSON
app.use(express.json());

// Use routes (Specific Route)
app.use("/api", mainRoutes);

// Handle unknown routes (BONUS)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
