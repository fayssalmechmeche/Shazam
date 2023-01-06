import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {linear} from 'react-native/Libraries/Animated/Easing';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemMusicList = props => {
  let [liked, setLike] = useState(false);
  const navigation = useNavigation();
  const listLiked = [];
  const onLike = () => {
    setLike(!liked);
  };

  const Favorite = async () => {
    try {
      await AsyncStorage.setItem(props.title, onLike);
      console.log('Mit dans tes favoris');
    } catch (e) {}
    console.log('Pas dans tes favoris');
  };

  /* handleClick() {
      this.setState(state => ({
      isFavorite: !state.isFavorite
    }));
  }; */

  const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, [navigation]);

  useEffect(() => {
    if (listLiked.includes(props.title)) {
      let pos = listLiked.indexOf(props.title);
      listLiked.splice(pos, 1);
      Favorite();
    } else if (!listLiked.includes(props.title)) {
      listLiked.push(props.title);
    }
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToDetail} style={{flex: 6}}>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/HVD_Disk.jpg/220px-HVD_Disk.jpg',
            }}
            style={{width: 20, heigth: 20}}
            resizeMode="contain"
          />
          <Text style={{marginLeft: 10, width: 200, textAlign: 'left'}}>
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLike} style={{flex: 1}}>
        <Text>{liked ? '❤' : '♡'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'blanchedalmond',
    height: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default ItemMusicList;
