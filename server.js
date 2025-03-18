
const express = require("express");
const connectDB = require("./TaskManagerApi/src/config/db");
const { client, connectRedis } = require("./TaskManagerApi/src/config/redis");

const app = express();
app.use(express.json());

console.log("here in server.js");


connectDB();

connectRedis();  

const taskRoutes = require("./TaskManagerApi/src/routes/taskRoutes");
const userRoutes = require("./TaskManagerApi/src/routes/userRoutes");

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
