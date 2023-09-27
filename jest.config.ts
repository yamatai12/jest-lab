import type { Config } from "jest";

const config: Config = {
  roots: ["./tests"],
  transform: {
    "^.+.ts$": "@swc/jest",
  },
};

export default config;
