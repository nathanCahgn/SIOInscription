import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleEmailChange = (text) => {
   setEmail(text);
 };

 const handlePasswordChange = (text) => {
   setPassword(text);
 };

 const handleLogin = () => {
   // Code pour gérer la connexion de l'utilisateur
 };


 return (
   <View>
     <TextInput
       placeholder="Email"
       value={email}
       onChangeText={handleEmailChange}
     />
     <TextInput
       placeholder="Mot de passe"
       value={password}
       onChangeText={handlePasswordChange}
       secureTextEntry
     />
     <Button title="Connexion" onPress={handleLogin} />
   </View>
 );
};

export default Login;
