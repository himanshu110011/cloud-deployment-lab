
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Cloud Application!</h1>
    <h2>Name: Himanshu Upadhyay</h2>
    <p>Application Version: 1.0.0</p>
    <p>Deployed using Docker and AWS EC2.</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
