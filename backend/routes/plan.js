// const express = require('express');
// const { getAllPlans, createPlan } = require('../controllers/planController');
// const { authenticateToken, authorizeRole } = require('../middleware/auth');
// const router = express.Router();
 
// // Only Super Admin can manage plans
// router.use(authenticateToken, authorizeRole('Super Admin'));
 
// router.get('/', getAllPlans);
// router.post('/', createPlan);
 
// module.exports = router;