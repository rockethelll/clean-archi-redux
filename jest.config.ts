import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
      customExportConditions: [""],
    },
    transform: {
      "^.+\\.(js|ts|tsx)$": "ts-jest",
    },
    transformIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
      "\\.(avif|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "jest-transform-stub",
      "@trainingsapp/domain/(.*)$": ["<rootDir>/src/domain/$1"],
      "@trainingsapp/di/ioc": ["<rootDir>/src/di/ioc.ts"],
      "@trainingsapp/infrastructure/(.*)$": ["<rootDir>/src/infrastructure/$1"],
      "@trainingsapp/utils/(.*)$": ["<rootDir>/src/utils/$1"],
      "@trainingsapp/store": ["<rootDir>/src/store/store.ts"],
      "@trainingsapp/components/(.*)$": [
        "<rootDir>/src/userinterface/components/$1",
      ],
      "@trainingsapp/pages/(.*)$": ["<rootDir>/src/userinterface/pages/$1"],
      "@trainingsapp/tests/mocks": ["<rootDir>/tests/mocks/mocks.js"],
    },
  };
};
