import type { Config } from "jest";

const config: Config = {
  roots: ["./tests"],
  transform: {
    "^.+.ts$": "ts-jest",
  },
  cacheDirectory: "node_modules/.cache/jest",
};

export default config;
