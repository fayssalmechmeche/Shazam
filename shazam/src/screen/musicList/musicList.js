/* eslint-disable react-hooks/exhaustive-deps */
import {getVersion} from 'jest';
import React, {useEffect, useMemo, useState} from 'react';
import API from '../../API/api';
import ItemMusicList from './itemMusicList';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MusicList = () => {
  const [data, setData] = useState([]);
  let [filters, setFilters] = useState('');
  const loadData = async () => {
    const response = await API.getData(API.options);
    console.log(response);
    setData(response.data.tracks);
  };
  const filteredData = useMemo(() => {
    return data.filter(o => o.title.includes(filters));
  }, [data, filters]);

  useEffect(() => {
    loadData();
    console.log('data : ' + data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TextInput
          value={filters}
          onChangeText={setFilters}
          placeholder={" Rechercher un titre ..."}
          style={{height: 30, borderColor: 'black', borderWidth: 1}}
        />
      </View>
      <FlatList
        style={{flex: 1}}
        data={filteredData}
        renderItem={({item, index}) => {
          return <ItemMusicList data={item} style={{flex: 1}} />;
        }}
      />
    </SafeAreaView>
  );
};

export default MusicList;
