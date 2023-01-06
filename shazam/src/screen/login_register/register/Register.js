import React, {useCallback, useMemo, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native';
import ButtonShazam from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {
  const navigation = useNavigation();
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const user = {pseudo: pseudo, password: password};

  const newUser = async () => {
    try {
      await AsyncStorage.setItem(user.pseudo, user.password);
      console.log('registered');
    } catch (error) {
      console.log('error: ' + error);
    }
  };

  useMemo(() => {
    if (
      password !== confirmPassword ||
      pseudo === '' ||
      password === '' ||
      password.length < 3
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [pseudo, password, confirmPassword]);

  const validator = useCallback(() => {
    if (isValid) {
      newUser();
      alert(
        'Welcome ' +
          user.pseudo +
          ' Now you can log in to find your favorite musics',
      );
      navigation.navigate('Login');
    } else {
      alert('miss information');
    }
  }, [isValid, user.pseudo]);


  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Image
          source={require('../../../assets/Musique.jpeg')}
          style={styles.photo}
        />
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.form}
            autoCapitalize="none"
            placeholder="pseudo"
            value={pseudo}
            onChangeText={setPseudo}
          />
          <TextInput
            style={styles.form}
            placeholder="mot de passe"
            autoCapitalize="none"
            secureTextEntry={true}
            value={user.password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.form}
            autoCapitalize="none"
            placeholder="confirmation mot de passe"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <ButtonShazam title={'Register'} onPress={validator} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  photo: {
    marginTop: 30,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  form: {
    marginTop: 30,
    backgroundColor: 'blanchedalmond',
    borderColor: 'black',
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  formRed: {
    marginTop: 30,
    backgroundColor: 'blanchedalmond',
    borderColor: 'red',
    height: 40,
    width: 350,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
    height: 50,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default Register;
