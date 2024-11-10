const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

router.get('/hello', myController.sayHello);

module.exports = router;