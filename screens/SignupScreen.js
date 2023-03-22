import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';

class Inscription extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     email: "",
     nom: "",
     prenom: "",
     datenaiss: "",
     ville: "",
     adresse: "",
     codepostal: "",
   };
 }
 _ChangeVue() {
   this.props.navigation.navigate("Accueil");
 }

 submit() {

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
     <Button title="Inscription" />
   </View>
 );
};
}
export default Inscription;
