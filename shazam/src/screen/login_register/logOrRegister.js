import React, {useCallback} from 'react';
import ButtonShazam from './components/Button';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';

const LogOrRegister = props => {
  const {navigation} = props;

  const goToLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const goToRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground source={require('../../assets/Musique.jpeg')}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.separator}>
          <ButtonShazam title="Login" onPress={goToLogin} />
          <ButtonShazam title="Register" onPress={goToRegister} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogOrRegister;
