import {getVersion} from 'jest';
import React from 'react';
import ItemMusicList from './itemMusicList';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';

const MusicList = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={['mon Text 1', 'mon Text 2', 'mon Text 3']}
        renderItem={({item, index}) => {
          return <ItemMusicList title={item} style={{flex: 1}} />;
        }}
      />
    </View>
  );
};

export default MusicList;
