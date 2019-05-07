# An Example Project to Incorporate Jest and WallabyJS with Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


## Steps to get it working

1 - Remove the following entries from devDependencies in package.json
    ```
    "@types/jasmine": "~2.8.8",
    "@types/jasminewd2": "~2.0.3",
    "jasmine-core": "~2.99.1",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~4.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "~2.0.1",
    "karma-jasmine": "~1.1.2",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.4.0",
    ```

2 - Add the following entries to devDependencies in package.json
    ```
    "@angular-builders/jest": "^7.4.1",
    "@types/jest": "^24.0.11",
    "jest": "^24.5.0",
    "jest-html-reporter": "2.5.0",
    "jest-preset-angular": "^7.0.1",
    "wallaby-webpack": "^3.9.14"
    ```

3 - Optionally, add the following to devDependencies in package.json if the project uses ngrx
    ```
    "jest-marbles": "^2.3.1",
    ```

4 - Add the following section to package.json
    ```
    "jest": {
      "preset": "jest-preset-angular",
      "setupFilesAfterEnv": [
        "<rootDir>/setupJest.ts"
      ]
    },
    ```

5 - Add the following files from the repo and amend as required
    ```
    setupJest.ts
    wallaby.js
    src/jest.config.js
    ```

6 - Edit /src/tsconfig.spec.json and make the following amendments
    ```
    Add compilerOptions -> "module": "commonjs",
    Remove compilerOptions -> types -> jasmine
    Remove compilerOptions -> types -> node
    Add compilerOptions -> types -> jest
    ```

7 - Modify the package.json to add the following scripts, replacing the standard "test" script
    ```
    "test": "ng test {project-name} --coverage --watch=false",
    "test:update": "ng test {project-name} --coverage --watch=false -u",
    "test:watch": "ng test {project-name} --watch --coverage",
    "test:coverage": "ng test {project-name} --coverage",
    ```

8 - In angular.json replace the "test" section with the following
    ```
    "test": {
      "builder": "@angular-builders/jest:run",
      "options": {
        "no-cache": true
      }
    },
    ```

9 - Delete src/test.ts

10 - modify "filesWithNoCoverageCalculated" in wallaby.js and "collectCoverageFrom" in src/jest.config.js to defined files requiring no coverage
