
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const protect = async (req, res, next) => {
  let token;

  // Récupération du token dans les headers
  const authHeader = req.headers.authorization;  
  if (authHeader && authHeader.startsWith('Bearer')) {    
    try {
      token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

            
      if (!req.user) {
        return res.status(401).json({ msg: 'Utilisateur non trouvé' });
      }

      next();
    } catch (error) {
      console.log(error);
      
      return res.status(401).json({ msg: 'Token invalide' });
    }
  } else {
    return res.status(401).json({ msg: 'Non autorisé, aucun token' });
  }
};



module.exports = protect;