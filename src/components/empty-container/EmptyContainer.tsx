import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './Styles';
const noDataIcon = require('../../../assets/no-data-icon.jpeg');

export const EmptyContainer = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.noDataIcon} source={noDataIcon} />
      <Text style={styles.text}>Sorry to say, but it seems like the data is currently unavailable</Text>
    </View>
  );
};
