import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Recording = props => {
  const {navigation} = props;
  let [record, setRecord] = useState(false);
  const onRecord = () => {
    setRecord(!record);
  };
  /* const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, [navigation]);
 */
  /* const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
 */
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.viewRecord}>
        <Text style={styles.sizeText}>Enregistrement</Text>
        <View style={{flex: 0.5}} />
        <TouchableOpacity onPress={onRecord} style={{flex: 1}}>
          <Text style={styles.sizeText}>{record ? '▶️' : '⏹'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  },
  viewRecord: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    marginVertical: 300,
  },
  sizeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Recording;
