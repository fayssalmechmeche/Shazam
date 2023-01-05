import React, {useCallback, useState} from 'react';
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

const App = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState('true');
  const login = 'Admin';
  const loginPseudo = 'Admin';

  const validator = useCallback(() => {
    if (password !== login || pseudo !== loginPseudo) {
      setIsValid('false');
      alert('Wrong pseudo and/or wrong password');
    } else {
      setIsValid('true');
      alert('You are logged!!!');
    }
  }, [pseudo, password]);

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
            placeholder="nom"
            value={pseudo}
            onChangeText={setPseudo}
          />
          <TextInput
            style={isValid ? styles.form : styles.formRed}
            autoCapitalize="none"
            secureTextEntry="true"
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

const Item = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>Login</Text>
  </TouchableOpacity>
);

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

export default App;
