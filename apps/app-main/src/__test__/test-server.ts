import { ApolloServer } from "@apollo/server";
import { CacheService, responseCachePlugin } from "@hubspire/cache-directive";
import { AppMainContext } from "../libs/types";
import { Modules } from "../modules";
import { TestDB } from "./test-db";

export default class TestApolloServer {
  public redisClient!: CacheService;

  constructor(
    public readonly apollo = new ApolloServer<AppMainContext>({
      schema: Modules.schemas,
      plugins: [responseCachePlugin<AppMainContext>()],
    })
  ) {}

  async start() {
    await TestDB.connect();
    this.redisClient = await CacheService.start({
      cache_prefix: "AppMain",
      cache_mode: "in-memory",
    });
    await this.apollo.start();
  }
  async stop() {
    await TestDB.disconnect();
    await this.apollo.stop();
  }
}
