import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
