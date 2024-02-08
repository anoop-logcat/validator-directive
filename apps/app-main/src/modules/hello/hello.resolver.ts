import { Resolvers } from "../../libs/types";

export default {
  Query: {
    appMainHello: (parent, args, context, info) => context.dataSources.helloDataSource.sayHello(),
  },
} as Resolvers;
