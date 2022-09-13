import client from "../client";

export default {
  Query: {
    beverages: () => client.beverage.findMany(),
    beverage: (_, { id }) =>
      client.beverage.findUnique({
        where: {
          id,
        },
      }),
  },
};
