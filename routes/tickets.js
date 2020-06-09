var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET users listing. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/tickets/:id', ticketsCtrl.create);
//router.post('/flights/:id/tickets', ticketsCtrl.addTicket);

module.exports = router;