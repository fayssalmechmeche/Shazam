import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<<<<<<< HEAD
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
=======
import HomeScreen from './screen/login_register/logOrRegister';
import DetailScreen from './screen/DetailScreen';
import login from './screen/login_register/Login/login';
import register from './screen/login_register/register/register';
>>>>>>> fusion

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD
=======
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
>>>>>>> fusion
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
