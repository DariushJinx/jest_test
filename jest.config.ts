import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/pass_checker";
const baseTestDir = "<rootDir>/src/test/pass_checker";
const baseDir_doubles = "<rootDir>/src/app/doubles";
const baseTestDir_doubles = "<rootDir>/src/test/doubles";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir_doubles}/**/*.ts`],
  testMatch: [`${baseTestDir_doubles}/**/*.ts`],
};

export default config;
