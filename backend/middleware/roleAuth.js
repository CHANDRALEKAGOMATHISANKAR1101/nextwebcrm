const jwt = require('jsonwebtoken');
 
// Middleware to verify the token and check role
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
 
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
 
      // Check if user role is in the allowed roles
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ msg: 'Access denied: insufficient role permissions' });
      }
      
      next();
    } catch (e) {
      res.status(400).json({ msg: 'Token is not valid' });
    }
  };
}
 
module.exports = authorizeRoles;