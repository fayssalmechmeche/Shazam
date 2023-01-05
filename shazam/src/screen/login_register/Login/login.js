import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <TouchableOpacity style={styles.btn} onPress={goToDetail}>
          <Text>Détail</Text>
        </TouchableOpacity>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Login;
