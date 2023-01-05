import React from 'react';
import ButtonShazam from './components/Button';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
//import Login from '../../Login/Login';

const LogOrRegister = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <ImageBackground source={require('../../assets/Musique.jpeg')}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.separator}>
            <ButtonShazam title="login" />
            <ButtonShazam title="Register" />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: 50,
    width: 50,
  },
  title: {
    marginTop: 50,
    fontSize: 50,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogOrRegister;
