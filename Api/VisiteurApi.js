import db from '../Firebase.js';
//import "../Firebase";
//import "firebase/firestore";
//import "firebase/auth";
//import * as firebase from "firebase";

export function addDataInVisiteur(email, telephone, nom, prenom, datenaiss, ville, adresse, codepostal, etablissement, filiereBAC) {
    /*db.collection("visiteur").add({            
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
      });*/


    addDoc(collection(db, "visiteur"), {
        email: email,
        telephone: telephone,
        nom: nom,
        prenom: prenom,
        dateNaissance: datenaiss,
        ville: ville,
        adresse: adresse,
        codepostal: codepostal,
        etablissement: etablissement,
        filiereBAC: filiereBAC
      });
    

      
  }

