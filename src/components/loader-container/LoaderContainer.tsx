import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './Styles';

export const LoaderContainer = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={{ marginTop: -100 }} size="large" />
      <Text style={styles.text}>Loading..</Text>
    </View>
  );
};
