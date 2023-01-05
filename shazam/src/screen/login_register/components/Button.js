import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonShazam = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 2,
    backgroundColor: 'blanchedalmond',
    alignItems: 'center',
    height: 70,
    width: 250,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 32,
  },
});

export default ButtonShazam;
