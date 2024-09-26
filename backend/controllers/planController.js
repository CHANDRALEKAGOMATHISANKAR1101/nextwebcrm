const Plan = require('../models/Plan');
 
// Get All Plans
exports.getAllPlans = async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
};
 
// Create a New Plan
exports.createPlan = async (req, res) => {
  const newPlan = new Plan(req.body);
  await newPlan.save();
  res.status(201).json(newPlan);
};