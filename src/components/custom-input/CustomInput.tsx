import React from 'react';
import { View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './Styles';

interface Props {
  searchString: string;
  setSearchString: any;
}

export const CustomInput = ({ searchString, setSearchString }: Props) => {
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
      <TextInput
        style={styles.input}
        placeholder="Search your coin"
        onChangeText={(text) => setSearchString(text)}
        value={searchString}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};
