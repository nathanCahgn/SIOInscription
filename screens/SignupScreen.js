import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

import { addDataInVisiteur } from "../Api/VisiteurApi";

class Inscription extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     email: "",
     telephone: "",
     nom: "",
     prenom: "",
     datenaiss: "",
     ville: "",
     adresse: "",
     codepostal: "",
     etablissement: "",
     filiereBAC: "",
   };
 }
 _ChangeVue() {
   this.props.navigation.navigate("Accueil");
 }

 submit() {
      
      addDataInVisiteur(this.state.email, this.state.telephone, this.state.nom, this.state.prenom, this.state.datenaiss, this.state.ville, this.state.adresse, this.state.codepostal, 
                        this.state.etablissement, this.state.filiereBAC);
       Alert.alert("Votre compte est en cours de validation !");
       this._ChangeVue();
}

render() {
 return (
   <View>
     <TextInput
       placeholder="Prénom"
       onChangeText={(text) => this.setState({ prenom: text })}
     />
     <TextInput
       placeholder="Nom"
       onChangeText={(text) => this.setState({ nom: text })}
     />
     <TextInput
       placeholder="Date de naissance"
       onChangeText={(text) => this.setState({ datenaiss: text })}
     />
     <TextInput
       placeholder="Email"
       onChangeText={(text) => this.setState({ email: text })}
     />
     <TextInput
        placeholder="Téléphone"
        onChangeText={(text) => this.setState({ telephone: number })}
        keyboardType="numeric"
     />
     <TextInput
       placeholder="Ville"
       onChangeText={(text) => this.setState({ ville: text })}
     />
     <TextInput
       placeholder="Adresse"
       onChangeText={(text) => this.setState({ adresse: text })}
     />
     <TextInput
       placeholder="code postal"
       onChangeText={(text) => this.setState({ codepostal: text })}
     />
     <TextInput
       placeholder="Etablissement"
       onChangeText={(text) => this.setState({ etablissement: text })}
     />
     <TextInput
       placeholder="filiereBAC"
       onChangeText={(text) => this.setState({ filiereBAC: text })}
     />
     <Button title="Inscription" 
                 onPressAction={() => {
                  this.submit();
                }}/>
   </View>
 );
};
}
export default Inscription;


