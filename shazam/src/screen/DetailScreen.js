import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';

const Detail = ({route}) => {
  const {data} = route.params;
  console.log(data.images.coverart);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: data.images.coverart}} />
        <View style={{flex: 0.05}} />
        <Text style={styles.artiste}>{data.artists[0].alias}</Text>
        <View style={{flex: 0.05}} />
        <Text style={styles.title_music}>{data.title}</Text>
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
    borderRadius: 400 / 2,
  },
  artiste: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  title_music: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Detail;
