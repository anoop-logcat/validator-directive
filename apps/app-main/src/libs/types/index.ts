import { CacheContext } from "@hubspire/cache-directive";
import { GraphQLSchema } from "graphql";
import HelloDataSource from "../../modules/hello/hello.datasource";
import { getLoaders } from "../config";
export * from "./generated/base-types";

export interface AppMainContext {
  accessToken?: string;
  serviceAdmin: boolean;
  dataSources: TDataSourceContext;
  cacheContext: CacheContext;
  loaders: ReturnType<typeof getLoaders>;
}

export type TDataSourceContext = {
  helloDataSource: HelloDataSource;
};

export type TModule = {
  schemas: GraphQLSchema;
  dataSources: TDataSourceContext;
};
