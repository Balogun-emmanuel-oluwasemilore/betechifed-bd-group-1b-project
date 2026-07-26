const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Task Manager API is running'));
app.use('/tasks', taskRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));