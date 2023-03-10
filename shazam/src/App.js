import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screen/login_register/logOrRegister';
import MusicList from './screen/musicList/musicList';
import DetailScreen from './screen/DetailScreen';
import login from './screen/login_register/Login/login';
import register from './screen/login_register/register/Register';
import ReadMe from './screen/ReadMe';
import Recording from './screen/Recording';
import DetailScreenRecord from './screen/DetailScreenRecord';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Register" component={register} />
        <Stack.Screen name="MusicList" component={MusicList} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ReadMe" component={ReadMe} />
        <Stack.Screen name="Recording" component={Recording} />
        <Stack.Screen
          name="DetailScreenRecord"
          component={DetailScreenRecord}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
