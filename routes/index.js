var express = require('express');
var router = express.Router();
const Trip = require('../models/trip')


/* GET home page. */


router.get('/search-trip', (req, res,) => {
  Trip.find({ })
  .then(data => {
 if(data) {
  res.json({trajet : data})
 } else {
  res.json({result: false, error: "pas de trajet trouvé"})
 }
})
});


router.post('/search-trip', (req, res) => {
  // Données de test en dur
  const newTrip = new Trip({
    departure: "Paris",
    arrival: "Lyon",
    date: new Date("2024-02-20"),
    price: 75
  });

  newTrip.save()
    .then(data => {
      console.log("Trip créé:", data);
      res.json({ result: true, trajet: data });
    })
    .catch(error => {
      console.error("Erreur lors de la création:", error);
      res.json({ result: false, error: error.message });
    });
});



module.exports = router;
