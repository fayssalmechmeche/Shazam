import React, {useCallback, useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import ButtonShazam from '../components/Button';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const [value, setValue] = useState('value');

  const getUser = async () => {
    try {
      const data = await AsyncStorage.getItem(pseudo);
      //console.log(pseudo + " " + data);
      console.log(value);
      if (data !== null || data !== '') {
        setValue(data);
      } else {
        return console.log('Pas de données!!!');
      }
    } catch (error) {
      console.log('erreur : ' + error);
    }
  };

  useEffect(() => {
    getUser();
  });

  const validator = useCallback(() => {
    if (password !== value) {
      setIsValid('false');
      alert('Wrong pseudo and/or wrong password');
    } else {
      setIsValid('true');
      alert('You are logged!!!');
      navigation.navigate('MusicList');
    }
  }, [password, value, navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Image
          style={styles.image}
          source={require('../../../assets/Musique.jpeg')}
        />
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={isValid ? styles.form : styles.formRed}
            autoCapitalize="none"
            placeholder="pseudo"
            value={pseudo}
            onChangeText={setPseudo}
          />
          <TextInput
            style={isValid ? styles.form : styles.formRed}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="mot de passe"
            value={password}
            onChangeText={setPassword}
          />
          <ButtonShazam
            style={styles.button}
            title="login"
            onPress={validator}
          />
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
    flex: 0.6,
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
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

export default Login;
