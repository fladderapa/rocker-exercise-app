import { gql } from '@apollo/client';

export const GET_CURRENCIES = gql`
  query GetAllAssets($assetIds: [String!]) {
    getAllAssets(assetIds: $assetIds) {
      asset_id
      name
      price_usd
    }
  }
`;
