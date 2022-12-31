const express = require('express');

const {ajouterUtilisateur,updateUtilisateur,toutLesUtilisateurs,UnUtilisateurParId,supprimerUnUtilisateur} = require('../Controller/UserController');



const routeUser = express.Router();

routeUser.post('/', ajouterUtilisateur);
routeUser.get('/', toutLesUtilisateurs);
routeUser.get('/:_id', UnUtilisateurParId);
routeUser.put('/:_id', updateUtilisateur);
routeUser.delete('/:_id', supprimerUnUtilisateur);


module.exports = routeUser;