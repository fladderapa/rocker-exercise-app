import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_LATEST_DATA } from './queries/CurrencyQuery';
import { logos } from '../../util/Config';
import { styles, chartTheme, lineStyle } from './Styles';
import { VictoryChart, VictoryLine } from 'victory-native';
import moment from 'moment';
import { EmptyContainer } from '../../components/empty-container/EmptyContainer';
import { LoaderContainer } from '../../components/loader-container/LoaderContainer';

interface Props {
  route: any;
}

interface HistoricAsset {
  time_close: string;
  price_close: number;
}

const { width, height } = Dimensions.get('screen');

export function CurrencyScreen({ route }: Props) {
  const assetId = route.params.asset_id;
  const timePeriod = '1DAY';
  const limit = 7;

  const { data, error, loading } = useQuery(GET_LATEST_DATA, { variables: { assetId, timePeriod, limit } });
  const { getLatestData: historicPrices } = data || {};

  const formatedHistoricPrices = historicPrices?.map((item: HistoricAsset) => {
    const formattedTime = moment(item.time_close).format('ddd');
    return { time: formattedTime, price: parseFloat(item.price_close.toFixed(2)) };
  });

  if (loading) {
    return <LoaderContainer />;
  }
  return (
    <>
      {formatedHistoricPrices?.length === 0 || formatedHistoricPrices === undefined || error ? (
        <EmptyContainer />
      ) : (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logos[route.params.asset_id]} />
          </View>
          {formatedHistoricPrices && (
            <VictoryChart width={width} height={height / 2} theme={chartTheme}>
              <VictoryLine
                style={{
                  data: lineStyle,
                }}
                data={formatedHistoricPrices}
                animate
                x="time"
                y="price"
              ></VictoryLine>
            </VictoryChart>
          )}
        </View>
      )}
    </>
  );
}
