var express = require('express');
var router = express.Router();
const Trip = require('../models/trip')
const mongoose = require('mongoose')

/* GET home page. */


/*router.get('/search-trip', (req, res,) => {
  Trip.find({} )
  .then(data => {

console.log("Nombre de documents dans trips:", count);
    console.log(data)
 if(data) {
  res.json({result: true ,trajet : data})
 } else {
  res.json({result: false, error: "pas de trajet trouvé"})
 }
})
});*/

router.get('/search-trip', (req, res) => {
  // Log les collections disponibles
  mongoose.connection.db.listCollections().toArray()
    .then(collections => {
      console.log("Collections disponibles:", collections.map(c => c.name));
      return Trip.find({});
    })
    .then(data => {
      console.log("Données trouvées:", data);
      if(data) {
        res.json({result: true, trajet: data});
      } else {
        res.json({result: false, error: "pas de trajet trouvé"});
      }
    })
    .catch(error => {
      console.error("Erreur:", error);
      res.json({result: false, error: error.message});
    });
});

module.exports = router;
