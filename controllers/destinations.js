const Flight = require('../models/flight');

module.exports = {
    create,
    delete: deleteDestination
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        console.log(flight.destinations[0]);
        flight.save(function(err){
            res.redirect(`/flights/${flight.id}`)
        })
    });
}

function deleteDestination(req, res) {
    console.log(req.params.id);
    console.log(req.params.arrayId);
    Flight.findById(req.params.id, function(err, flight) {
        const idx = flight.destinations.findIndex(destination => destination.id === parseInt(req.params.arrayId))
        flight.destinations.splice(idx, 1);
        flight.save(function(err){
            res.redirect(`/flights/${flight.id}`)
        })
    })
}