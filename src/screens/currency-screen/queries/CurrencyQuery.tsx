import { gql } from '@apollo/client';

export const GET_LATEST_DATA = gql`
  query Query($assetId: String, $timePeriod: String, $limit: Int) {
    getLatestData(assetId: $assetId, timePeriod: $timePeriod, limit: $limit) {
      price_close
      time_close
    }
  }
`;
