import * as firebase from "firebase";
import "../Firebase";
import "firebase/firestore";
import "firebase/auth";


export function addDataInVisiteur(email, telephone, nom, prenom, datenaiss, ville, adresse, codepostal, etablissement, filiereBAC) {
    firebase
      .firestore()
      .collection("visiteur")
      .add({            
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
      });
  }

