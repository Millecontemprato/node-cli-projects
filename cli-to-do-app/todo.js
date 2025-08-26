const fs = require("fs");
const filePath = "./tasks.json";

// Helper: Load tasks from file
function loadTasks() {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper: Save tasks to file
function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Command: Add task
function addTask(task) {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Task added: "${task}"`);
}

// Command: List tasks
function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}

// Command: Remove task
function removeTask(index) {
  const tasks = loadTasks();
  if (index < 1 || index > tasks.length) {
    console.log("Invalid task number.");
    return;
  }
  const removed = tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log(`Removed task: "${removed}"`);
}

// CLI Handler
const command = process.argv[2];
const input = process.argv[3];

if (command === "add") {
  addTask(input);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(Number(input));
} else {
  console.log("Unknown command. Use: add | list | remove");
}
