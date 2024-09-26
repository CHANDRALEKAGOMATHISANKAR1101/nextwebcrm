const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const authorizeRoles = require('../middleware/roleAuth');
 
// Create a new task (Only Admin or Super Admin)
router.post('/', authorizeRoles('Super Admin', 'Admin'), async (req, res) => {
  const { title, description, assignedTo } = req.body;
 
  try {
    const newTask = new Task({
      title,
      description,
      assignedTo,
      createdBy: req.user.id,
    });
 
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
// Get all tasks (Only Admin or Super Admin)
router.get('/', authorizeRoles('Super Admin', 'Admin'), async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo', 'name');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
// Update a task status (Only Admin, Employee, Super Admin)
router.put('/:id', authorizeRoles('Super Admin', 'Admin', 'Employee'), async (req, res) => {
  const { status } = req.body;
 
  try {
    const task = await Task.findById(req.params.id);
 
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
 
    task.status = status;
    await task.save();
 
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
// Delete a task (Only Admin or Super Admin)
router.delete('/:id', authorizeRoles('Super Admin', 'Admin'), async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
 
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }
 
    await task.remove();
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
module.exports = router;