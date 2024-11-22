import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // Use jsdom environment for testing React
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Handle .ts and .tsx files with ts-jest
  },
  testMatch: ['**/src/tests/**/*.test.ts', '**/src/tests/**/*.test.tsx'],  // Test file patterns
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],  // Allowed file extensions
};

export default config;
