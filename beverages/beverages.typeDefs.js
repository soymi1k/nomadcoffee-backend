import { gql } from "apollo-server";

export default gql`
  type Beverage {
    id: Int!
    name: String!
    price: Int!
    season: String!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    beverages: [Beverage]
    beverage: Beverage
  }
  type Mutation {
    createDrink(name: String!, price: Int!, season: String!): Beverage
    deleteDrink(id: Int!): Beverage
    updateDrink(id: Int!, name: String, price: Int, season: String): Beverage
  }
`;
