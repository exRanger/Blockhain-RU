import {
  gql,
} from '@apollo/client';

export const typePlot = gql`
  extend type Query {
    isConnection: Boolean!
    dataPlots: [ID!]
  }
`;

export const typeAsset = gql`
  extend type Query {
    isConnection: Boolean!
    dataAssets: [ID!]
    assets: [String!]!
  }
`
