const fs = require("fs");
const path = "./log.txt";

// Get current date & time
function getTimestamp() {
  const now = new Date();
  return now.toISOString(); // e.g., 2025-08-24T04:30:21.123Z
}

// Log message into file
function logMessage(message) {
  const entry = `[${getTimestamp()}] ${message}\n`;
  fs.appendFileSync(path, entry);
  console.log(`Logged: ${message}`);
}

// CLI Handler
const input = process.argv[2];

if (!input) {
  console.log("Please provide a message to log.");
} else {
  logMessage(input);
}
