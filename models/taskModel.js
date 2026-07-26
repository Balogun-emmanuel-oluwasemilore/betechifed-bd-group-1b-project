let tasks = [];
let nextId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === Number(id));

const createTask = (title, description, status = "pending") => {
  const newTask = { id: nextId++, title, description, status };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, updates) => {
  const task = getTaskById(id);
  if (!task) return null;
  Object.assign(task, updates);
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === Number(id));
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };