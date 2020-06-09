const Flight = require('../models/flight');
const Ticket = require('../models/tickets');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {title: 'View Flights', flights});
    })
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'New Flight'});
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight.id}, function(err, tickets){
            res.render("flights/show", {title: 'Show flight', flight, tickets})
        })
    });
}

function deleteFlight(req, res) {
    Flight.deleteOne({_id: req.params.id}, function(err) {
        res.redirect('/flights');
    });
}