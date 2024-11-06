var express = require('express');
var router = express.Router();
const Trip = require('../models/trip')
const Cart = require('../models/cart')

/* GET search trip */
router.get('/search-trip/:departure/:arrival/:date', (req, res) => {
  const { departure, arrival, date } = req.params;
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(date);
  endDate.setHours(23, 59, 59, 999);
  Trip.find({
    departure,
    arrival,
    date: { $gte: startDate, $lte: endDate }
  })
  .then(data => {
    if (data && data.length > 0) {
      res.json({ trajet: data });
    } else {
      res.json({ result: false, error: "Pas de trajet trouvé" });
    }
  });
});

/* POST add to cart */
router.post('/add-to-cart', (req, res) => {
  const newCart = new Cart({
    departure: req.body.departure,
    arrival : req.body.arrival,
    price: req.body.price,
    date : req.body.date
  });
  newCart.save()
    .then(trip => {
      res.json({ result: true, trip });
    });
});

module.exports = router;
