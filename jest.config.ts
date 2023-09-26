import type { Config } from "jest";

const config: Config = {
  roots: ["./tests"],
  transform: {
    "^.+.ts$": "ts-jest",
  },
  runner: "jest-light-runner",
};

export default config;
