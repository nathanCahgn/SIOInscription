import db from '../Firebase.js';
//import { addDoc, collection, setDoc } from "firebase/firestore"; 
//import "../Firebase";
//import "firebase/firestore";
//import "firebase/auth";
//import * as firebase from "firebase";

export function addDataInVisiteur(email, telephone, nom, prenom, datenaiss, ville, adresse, codepostal, etablissement, filiereBAC, lieuInscription) {
    try { 

    db.collection("visiteur").add({            
        email: email,
        telephone: telephone,
        nom: nom,
        prenom: prenom,
        dateNaissance: datenaiss,
        ville: ville,
        adresse: adresse,
        codepostal: codepostal,
        etablissement: etablissement,
        filiereBAC: filiereBAC,
        lieuInscription: lieuInscription
      });



      } catch (e) {
        console.error("Error adding document: ", e);
      }
    

      
  }

