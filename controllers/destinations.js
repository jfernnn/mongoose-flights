const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    res.redirect('/flights');
}