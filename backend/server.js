import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory storage (since no database yet)
let tasks = [];

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  tasks.push(task);
  res.json({ message: "Task added", tasks });
});

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
// EDIT a task
app.put("/tasks/:index", (req, res) => {
  const { index } = req.params;
  const { task } = req.body;

  if (!tasks[index]) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks[index] = task; // update task
  res.json(tasks);
});

