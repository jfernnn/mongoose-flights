var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;