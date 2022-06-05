const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controlers/stuff');
const auth = require('../middleware/auth');

  ///Enregistrer des données dans la base de données

  router.post('/',auth ,stuffCtrl.createThing)


//Récuperation de tous les objets de la base de données 
router.get('/',auth ,stuffCtrl.getAllThings)


// Récuperation d'un seul objet de la base de données 
router.get('/:id', auth ,stuffCtrl.getOneThing)


//Modification d'un objet 
router.put('/:id',auth ,stuffCtrl.modifyThing )

//Suppression d'un objet 
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;