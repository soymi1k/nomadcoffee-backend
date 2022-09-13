import client from "../client";

export default {
  Mutation: {
    createDrink: (_, { name, price, season }) =>
      client.beverage.create({
        data: {
          name,
          price,
          season,
        },
      }),
    deleteDrink: (_, { id }) =>
      client.beverage.delete({
        where: {
          id,
        },
      }),
    updateDrink: (_, { id, name, price, season }) =>
      client.beverage.update({ where: { id }, data: { name, price, season } }),
  },
};
