import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './Styles';

interface Props {
  asset: any;
  logo: any;
}

export function CryptoListItem({ asset, logo }: Props) {
  const { asset_id: shortName, price_usd } = asset || {};

  return (
    <View style={styles.container}>
      <View style={styles.asseetContainer}>
        <Image style={styles.logo} source={logo} />
        <View>
          <Text style={styles.paragraph}>{shortName}</Text>
          <Text style={styles.label}>Asset</Text>
        </View>
      </View>
      <View style={styles.rateContainer}>
        <Text style={styles.paragraph}>{parseFloat(price_usd).toFixed(2)} $</Text>
        <Text style={styles.label}>Rate</Text>
      </View>
    </View>
  );
}
