import *  as React from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import {db} from '../Firebase.js';



//import { addDataInVisiteur } from "../Api/VisiteurApi";
/*
class Inscription extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     email: '',
        telephone: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        ville: '',
        adresse: '',
        codepostal: '',
        etablissement: '',
        filiereBAC: '',
        lieuInscription: '',
   };
 } */ 
 /*_ChangeVue() {
   //this.props.navigation.navigate("Accueil");
 }*/
/*
 submit() {
      
      addDataInVisiteur(this.state.emailEtu, this.state.telephoneEtu, this.state.nomEtu, this.state.prenomEtu, this.state.datenaissEtu, this.state.villeEtu, this.state.adresseEtu, this.state.codepostalEtu, 
                        this.state.etablissementEtu, this.state.filiereBACEtu, this.state.lieuInscriptionEtu);
       Alert.alert("Votre compte à été enregistré !");
       //this._ChangeVue();

       
}

render() {
*/


export default function InscriptionVisiteur({navigation}){
  const[adresse, setAdresse] = useState('');
  const[codepostal, setCodePostal] = useState('');
  const[dateNaissance, setDateNaissance] = useState('');
  const[email, setEmail] = useState('');
  const[etablissement, setEtablissement] = useState('');
  const[filiereBAC, setFiliereBAC] = useState('');
  const[lieuInscription, setLieuInscription] = useState('');
  const[nom, setNom] = useState('');
  const[prenom, setPrenom] = useState('');
  const[telephone, setTelephone] = useState('');
  const[ville, setVille] = useState('');

  const handleRegistration = async () => {
    //console.log(prenom, nom, dateNaissance, email, telephone, ville, adresse, codepostal, etablissement, filiereBAC, lieuInscription);
    try{
      const response = await db  
        .collection('visiteur')
        .add({
          adresse: adresse,
          codepostal: codepostal,
          dateNaissance: dateNaissance,
          email: email,
          etablissement: etablissement,
          filiereBAC: filiereBAC,
          lieuInscription: lieuInscription,
          nom: nom,
          prenom: prenom,
          telephone: telephone,
          ville: ville,
        });
      console.log('Inscription effectuée', response);
      Alert.alert('Inscription terminée !');
    }

    catch (e){
      console.error('Erreur lors de l\'inscription', e);
      Alert.alert('Erreur lors de l\'inscription');
    }
  };



  return (
   <View>
     <TextInput
       placeholder="Prénom"
       onChangeText={setPrenom}
     />
     <TextInput
       placeholder="Nom"
       onChangeText={setNom}
     />
     <TextInput
       placeholder="Date de naissance"
       onChangeText={setDateNaissance}
       keyboardType="numeric"
     />
     <TextInput
       placeholder="Email"
       onChangeText={setEmail}
     />
     <TextInput
        placeholder="Téléphone"
        onChangeText={setTelephone}
        keyboardType="numeric"
     />
     <TextInput
       placeholder="Ville"
       onChangeText={setVille}
     />
     <TextInput
       placeholder="Adresse"
       onChangeText={setAdresse}
     />
     <TextInput
       placeholder="code postal"
       onChangeText={setCodePostal}
       keyboardType="numeric"
     />
     <TextInput
       placeholder="Etablissement"
       onChangeText={setEtablissement}
     />
     <TextInput
       placeholder="filiereBAC"
       onChangeText={setFiliereBAC}
     />

<Picker
    selectedValue={lieuInscription}
    onValueChange={(itemValue) => setLieuInscription(itemValue)}
  >
    <Picker.Item label="Salon de l'étudiant" value="Salon de l'étudiant" />
    <Picker.Item label="Journée Portes Ouvertes" value="Journée Portes Ouvertes" />
  </Picker>

  <Button title="Inscription"  onPress={() => {
      //console.log(prenom, nom, dateNaissance, email, telephone, ville, adresse, codepostal, etablissement, filiereBAC, lieuInscription);
      handleRegistration();}} />

   </View>
 );
};

