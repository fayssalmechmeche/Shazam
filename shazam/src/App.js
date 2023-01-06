import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screen/login_register/logOrRegister';
import MusicList from './screen/musicList/musicList';
import DetailScreen from './screen/DetailScreen';
import login from './screen/login_register/Login/login';
import register from './screen/login_register/register/Register';
import readMe from './screen/readMe';
import Recording from './screen/Recording';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReadMe">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
        <Stack.Screen name="MusicList" component={MusicList} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ReadMe" component={readMe} />
        <Stack.Screen name="Recording" component={Recording} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
