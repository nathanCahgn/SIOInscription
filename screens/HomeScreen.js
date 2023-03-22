import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Inscription" onPress={() => navigation.navigate('Inscription')} />
      <Button title="Connexion" onPress={() => navigation.navigate('Connexion')} />
    </View>
  );
}

export default HomeScreen;