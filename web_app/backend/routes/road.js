const express = require('express');
const router = express.Router();
const road = require('../models/road');
const c= require('../controllers/road');
// Add a new road
router.get('/',c.getroad);

module.exports = router;
