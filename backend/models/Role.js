const mongoose = require('mongoose');
 
const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
  },
  permissions: {
    type: [String], // Permissions for different actions
  },
});
 
module.exports = mongoose.model('Role', roleSchema);
