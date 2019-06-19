module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'setupJest.ts',
      '!src/**/*.spec.ts',
    ],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        getCustomTransformers: () => {
          return {before: [require('jest-preset-angular/InlineHtmlStripStylesTransformer').factory({compilerModule: require('typescript')})]};
        }
      }),
      '**/*.html': file => ({
        code: require('ts-jest').process(file.content, file.path, {globals: {'ts-jest': {stringifyContentPathRegex: '\\.html$'}}}),
        map: {version: 3, sources: [], names: [], mappings: []},
        ranges: []
      })
    },

    preprocessors: {
      'src/**/*.js': [
        file => require('@babel/core').transform(file.content, {
          sourceMap: true, compact: false, filename: file.path,
          presets: [require('babel-preset-jest')]
        })
      ]
    },

    setup: function(wallaby) {
      let jestConfig = require("./package.json").jest;
      delete jestConfig.preset;
      jestConfig = Object.assign(require("jest-preset-angular/jest-preset"), jestConfig);
      jestConfig.transformIgnorePatterns.push("instrumented.*.(jsx?|html)$");
      wallaby.testFramework.configure(jestConfig);
    },

    filesWithNoCoverageCalculated: [
      'src/**/*.module.ts', // skip module files
      'src/main.ts', // skip setup files
      'src/environments/*.ts', // skip environment files
      'src/setupJest.ts', // skip setup files
      'src/polyfills.ts', // skip setup files
      'src/wallabyTest.ts', // skip setup files
      'src/helpers/*.ts', // skip test helper classes
      'src/**/*.spec.ts', // skip spec files
      '**/**e2e/**/*.{ts}', // skip e2e tests
      '**/node_modules/**', // skip node_modules are they aren't our code
    ],

    testFramework: 'jest'
  };
};
