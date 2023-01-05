import React from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.screen}>
      <View>
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

export default Register;
