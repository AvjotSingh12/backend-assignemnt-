const Task = require("../models/Task");
const redisClient = require("../config/redis");
const PriorityQueue = require("../services/priorityQueue");

const pq = new PriorityQueue();

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  pq.add(task);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const cachedTasks = await redisClient.get("tasks");
  if (cachedTasks) return res.json(JSON.parse(cachedTasks));

  const { priority, status, page = 1, limit = 5 } = req.query;
  let query = {};
  if (priority) query.priority = priority;
  if (status) query.status = status;

  const tasks = await Task.find(query)
    .sort({ priority: 1, createdAt: 1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  await redisClient.set("tasks", JSON.stringify(tasks), { EX: 60 });
  res.json(tasks);
};
