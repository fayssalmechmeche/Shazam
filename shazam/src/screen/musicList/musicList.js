import {getVersion} from 'jest';
import React, {useEffect, useState} from 'react';
import API from '../../API/api';
import ItemMusicList from './itemMusicList';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MusicList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await API.getData(API.options);
    console.log(response);
    setData(response.data.tracks);
  };

  useEffect(() => {
    loadData();
    console.log('data : ' + data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return <ItemMusicList title={item.title} style={{flex: 1}} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MusicList;
