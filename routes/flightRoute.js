const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlights);
router.get('/single/:id', controller.getSingleFlight);
router.post('/', controller.addOrBookFlight);

module.exports = router;

