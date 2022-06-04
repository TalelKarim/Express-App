const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controlers/stuff');


  ///Enregistrer des données dans la base de données

  router.post('/',stuffCtrl.createThing)


//Récuperation de tous les objets de la base de données 
router.get('/',stuffCtrl.getAllThings)


// Récuperation d'un seul objet de la base de données 
router.get('/:id' ,stuffCtrl.getOneThing)


//Modification d'un objet 
router.put('/:id',stuffCtrl.modifyThing )

//Suppression d'un objet 
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;