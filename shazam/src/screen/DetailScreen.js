import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';

const Detail = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'blanchedalmond',
  },
  img: {
    height: 200,
    width: 200,
  },
});

export default Detail;
