import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const Home = props => {
  const {navigation} = props;

  const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.btn} onPress={goToDetail}>
          <Text>Détail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={goBack}>
          <Text>Retour</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blanchedalmond',
  },
});

export default Home;
