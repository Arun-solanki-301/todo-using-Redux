import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContainerScreen from './ContainerScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

export default function App() {
  return (
    <Provider store = {Store}>
      <ContainerScreen />
    </Provider>
  );
}
