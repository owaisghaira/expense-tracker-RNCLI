import React from 'react';
import { StyleSheet, ScrollView, View, Text, } from 'react-native';
import Navegate from './src/config/Router'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <Navegate />
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
  },
});

export default App;
