module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './src/tsconfig.spec.json',
    },
    stringifyContentPathRegex: '\\.html$',
  },
  setupFilesAfterEnv: [ '<rootDir>/node_modules/@angular-builders/jest/src/jest-config/setup.js' ],
  "transform": {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: ['**/__tests__/**/*.+(ts|js)?(x)', '**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['js', 'ts', 'html', 'json'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  testResultsProcessor: 'jest-html-reporter',
  moduleNameMapper: {
    //For avoid long imports with ...
    // "app/(.*)": "<rootDir>/src/app/$1",
    // "@common/(.*)": "<rootDir>/src/app/common/$1",
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.module.ts', // skip module files
    '!src/environments/*.ts', // skip environment files
    '!src/main.ts', // skip setup files
    '!src/setupJest.ts', // skip setup files
    '!src/polyfills.ts', // skip setup files
    '!src/helpers/*.ts', // skip test helper classes
    '!src/**/*.spec.ts', // skip spec files
    '!**/**e2e/**/*.{ts}', // skip e2e tests
    '!**/node_modules/**', // skip node_modules are they aren't our code
  ],
  coverageThreshold: {
    "global": {
      "branches": 50,
      "functions": 85,
      "lines": 85,
      "statements": 85
    }
  },
  watchPathIgnorePatterns: [
    "<rootDir>/jest.json",
    "<rootDir>/test-report.html",
    "<rootDir>/node_modules/*",
    "<rootDir>/coverage/*",
    "<rootDir>/dist/*"
  ],
};
