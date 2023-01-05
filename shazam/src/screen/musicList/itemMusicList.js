import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {linear} from 'react-native/Libraries/Animated/Easing';

const ItemMusicList = props => {
  let [liked, setLike] = useState(false);
  const listLiked = [];
  const onLike = () => {
    setLike(!liked);
  };

  useEffect(() => {
    if (listLiked.includes(props.title)) {
      let pos = listLiked.indexOf(props.title);
      listLiked.splice(pos, 1);
    } else if (!listLiked.includes(props.title)) {
      listLiked.push(props.title);
    }
  });
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => console.log('Pressed')}
        style={{flex: 6}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/HVD_Disk.jpg/220px-HVD_Disk.jpg',
            }}
            style={{width: 20, heigth: 20}}
            resizeMode="cover"
          />
          <Text style={{marginLeft: 20, width: 200}}>{props.title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLike} style={{flex: 1}}>
        <Text>{liked ? '❤' : '♡'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemMusicList;
