import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { CryptoListItem } from '../../components/crypto-list-item/CryptoListItem';
import { useQuery } from '@apollo/client';
import { GET_CURRENCIES } from './queries/CurrenciesQuery';
import { activeCurrencies, logos } from '../../util/Config';
import { styles } from './Styles';
import { CustomInput } from '../../components/custom-input/CustomInput';
import { LoaderContainer } from '../../components/loader-container/LoaderContainer';
import { EmptyContainer } from '../../components/empty-container/EmptyContainer';

interface Props {
  navigation: any;
}

interface Asset {
  asset_id: string;
  name: string;
  price_usd: any;
}

export function CurrenciesScreen({ navigation }: Props) {
  const { data, error, loading } = useQuery(GET_CURRENCIES, { variables: { assetIds: activeCurrencies } });
  const { getAllAssets: assets } = data || {};

  const [searchString, setSearchString] = useState('');

  const filteredAssets = assets?.filter(
    (asset: Asset) =>
      asset?.name?.toUpperCase().includes(searchString.toUpperCase()) ||
      asset?.asset_id?.toUpperCase().includes(searchString.toUpperCase())
  );

  if (loading) {
    return <LoaderContainer />;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.header}>When lambo?</Text>
          <CustomInput searchString={searchString} setSearchString={setSearchString} />
        </View>
        <View style={styles.body}>
          {filteredAssets?.length === 0 || filteredAssets === undefined || error ? (
            <>
              <EmptyContainer />
            </>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredAssets?.map((asset: Asset, logo: any) => (
                <TouchableOpacity onPress={() => navigation.navigate('DetailCurrency', asset)} key={asset.asset_id}>
                  <CryptoListItem asset={asset} logo={logos[asset.asset_id]} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
        <View style={styles.footer}></View>
      </View>
    </>
  );
}
