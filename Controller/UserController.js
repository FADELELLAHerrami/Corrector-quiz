
const UserModel = require('../models/UserModel');


// POST /user : Ajouter un nouvel utilisateur
const ajouterUtilisateur = async (req, res) => {
    // Récupérez les données de l'utilisateur à partir du corps de la demande
    const {nom,email,password} = req.body;
    const newUtilisateur = await UserModel.create({nom,email,password});
    res.json(newUtilisateur);
 
  };
const toutLesUtilisateurs = async (req,res)=>{
    const toutLesUtilisateurs = await UserModel.find();
    res.json(toutLesUtilisateurs);
};
const updateUtilisateur = async (req,res)=>{
    const utilisateurId = req.params;
    const {nom,email,password} = req.body;
    const updatedUtilisateur = await UserModel.findByIdAndUpdate(utilisateurId,{nom,email,password});
    res.json(updatedUtilisateur);
};
const UnUtilisateurParId = async (req,res)=>{
    const utilisateurId = req.params;
    const utilisateur = await UserModel.findById(utilisateurId);
    res.json(utilisateur);

}

const supprimerUnUtilisateur = async (req,res)=>{
    const utilisateurId = req.params;
    const updatedUtilisateur = await UserModel.findByIdAndDelete(utilisateurId);
    res.json(updatedUtilisateur);
}

  module.exports = {
    ajouterUtilisateur,
    updateUtilisateur,
    toutLesUtilisateurs,
    UnUtilisateurParId,
    supprimerUnUtilisateur,
  };



