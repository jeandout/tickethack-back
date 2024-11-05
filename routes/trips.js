var express = require('express');
var router = express.Router();

const Trip = require('../models/trip');


/* GET trip listing. */
router.get('/:departure:arrival:date', function(req, res, next) {

  Trip.find().then(data => {
    console.log(data);
    const cityEx = data.some(e => e.cityName.toLowerCase() === req.body.cityName.toLowerCase())

});


  res.send('respond with a resource');
});

module.exports = router;
