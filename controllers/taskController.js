const taskModel = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: taskModel.getAllTasks() });
};

exports.getTaskById = (req, res) => {
  const task = taskModel.getTaskById(req.params.id);
  if (!task) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, data: task });
};

exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  const task = taskModel.createTask(title, description, status);
  res.status(201).json({ success: true, data: task });
};

exports.updateTask = (req, res) => {
  const task = taskModel.updateTask(req.params.id, req.body);
  if (!task) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, data: task });
};

exports.deleteTask = (req, res) => {
  const deleted = taskModel.deleteTask(req.params.id);
  if (!deleted) return res.status(404).json({ success: false, message: "Task not found" });
  res.status(200).json({ success: true, message: "Task deleted" });
};