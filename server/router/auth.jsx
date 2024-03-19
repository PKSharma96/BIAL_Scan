const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes for user authentication
router.get('/login', authController.login);

module.exports = router;
