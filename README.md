# An Example Project to Incorporate Jest and WallabyJS with Angular CLI

[![Build Status](https://travis-ci.com/bonejon/angular-jest-wallabyjs.svg?branch=master)](https://travis-ci.com/bonejon/angular-jest-wallabyjs)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


## Steps to get it working

1 - Remove the following entries from devDependencies in package.json
```json
"@types/jasmine": "???",
"@types/jasminewd2": "???",
"jasmine-core": "~???",
"jasmine-spec-reporter": "???",
"karma": "???",
"karma-chrome-launcher": "???",
"karma-coverage-istanbul-reporter": "???",
"karma-jasmine": "???",
"karma-jasmine-html-reporter": "???",
"protractor": "???",
```

2 - Add the following entries to devDependencies in package.json
```json
"@angular-builders/jest": "^8.0.3",
"@types/jest": "^24.0.11",
"jest": "^24.8.0",
"jest-html-reporter": "2.5.0",
"jest-preset-angular": "^7.1.1",
"wallaby-webpack": "^3.9.15"
```

3 - Optionally, add the following to devDependencies in package.json if the project uses ngrx
```json
"jest-marbles": "^2.3.1",
```

4 - Add the following section to package.json
```json
"jest": {
  "preset": "jest-preset-angular",
  "setupFilesAfterEnv": [
    "<rootDir>/setupJest.ts"
  ]
},
```

5 - Add the following files from the repo and amend as required
```json
setupJest.ts
wallaby.js
jest.config.js
```

6 - Edit /src/tsconfig.spec.json and make the following amendments
```json
Add compilerOptions -> "module": "commonjs",
Remove compilerOptions -> types -> jasmine
Remove compilerOptions -> types -> node
Add compilerOptions -> types -> jest
```

7 - Modify the package.json to add the following scripts, replacing the standard "test" script
```json
"test": "ng test {project-name} --coverage --watch=false",
"test:update": "ng test {project-name} --coverage --watch=false -u",
"test:watch": "ng test {project-name} --watch --coverage",
"test:coverage": "ng test {project-name} --coverage",
```

8 - In angular.json replace the "test" section with the following
```json
"test": {
  "builder": "@angular-builders/jest:run",
  "options": {
    "no-cache": true
  }
},
```

9 - Delete src/test.ts

10 - modify "filesWithNoCoverageCalculated" in wallaby.js and "collectCoverageFrom" in src/jest.config.js to defined files requiring no coverage
