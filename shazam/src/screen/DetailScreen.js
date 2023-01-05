import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';

const Detail = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{uri: 'https://reactjs.org/logo-og.png'}}
        />
        <View style={{flex: 0.05}} />
        <Text style={styles.artiste}>Artiste</Text>
        <View style={{flex: 0.05}} />
        <Text style={styles.title_music}>Titre de la musique</Text>
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
    justifyContent: 'center',
    backgroundColor: 'blanchedalmond',
  },
  img: {
    height: 200,
    width: 200,
  },
  artiste: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title_music : {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  }
});

export default Detail;
