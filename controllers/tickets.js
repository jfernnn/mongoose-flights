const Ticket = require('../models/tickets');
const Flight = require('../models/flight')
//const Flight = require('../models/flights');


module.exports = {
    new: newTicket,
    create,
    addTicket
}

function newTicket(req, res) {
    console.log('----', req.params.id);
    res.render('flights/ticket', {title: 'Tickets', flightId: req.params.id})
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        const ticket = new Ticket(req.body);
        console.log(ticket);
        ticket.flight = flight.id;
        console.log(req.params.id);
        ticket.save(function(err) {
            console.log(flight);
            flight.tickets.push(req.body.id);
            console.log('flighttt-->', flight.tickets[0], '---', flight.tickets.length)
            flight.save(function(err) {
                res.redirect(`../flights/${flight.id}`)
            });
        });
    });
}

function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push(req.body.id);
        flight.save(function(err) {
            res.redirect(`flights/${flight.id}`)
        })
    })
}