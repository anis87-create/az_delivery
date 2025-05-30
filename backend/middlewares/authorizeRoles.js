const authorizeRoles = (...roles) => {

   return (req, res, next) => {
     if(!roles.includes(req.user.role)) {
       return res.status(400).json({msg:'Access denied: insufficient role'})
     }
     next();
   }
}

module.exports = authorizeRoles;