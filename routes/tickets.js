var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/flights/:id/tickets', ticketsCtrl.new);

module.exports = router;