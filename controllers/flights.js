const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
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
    console.log(req.body);
    flight.save(function(err) {
        res.redirect('/flights');
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render("flights/show", {title: 'Show flight', flight})

    })
}