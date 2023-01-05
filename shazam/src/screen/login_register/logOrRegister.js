import React from 'react';
import ButtonShazam from './components/Button';
import {SafeAreaView, View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const LogOrRegister = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require('../../assets/Musique.jpeg')}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.separator}>
          <ButtonShazam title="login" />
          <ButtonShazam title="Register" />
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300,
  },
});

export default LogOrRegister;
