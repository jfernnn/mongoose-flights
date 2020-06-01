const Ticket = require('../models/tickets');
//const Flight = require('../models/flights');


module.exports = {
    new: newTicket
}

function newTicket(req, res) {
    // Flight.findById(req.params.id, function(err, flight) {
    //     flight.tickets.push
    // })
    res.render('flights/ticket', {title: 'Tickets'})
}