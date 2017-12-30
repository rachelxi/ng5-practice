### Practice project with Angular 5 + Typescript 2.6 + webpack 3.10
* run the project: install all dependencies and then start (webpack 3 bundle and start browser with http-server) with commands :
```
npm install
npm start
```
* run tests and coverage with karma + jasmine + istanbul and start browser with http-server if coverage passed threshold:
```
npm test
```
* run linting with codelyzer:
```
npm run lint
```
### Configurable files:
Instead of using angular-cli, the project manually config build/tests/linting and all editable.
* build project
1. ./webpack.config.js: transpile ts file into js file and split the code into three files - app.js, vendor.js and polyfills.js. scss files are compiled with sass-loader and bundled into style.css. All resulting bundle files are output to './dist' folder for http-server to fetch. All js files after bundle are optimized with [uglifyJsPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin). Workaround with webpack warning *@angular/core/esm5* has been implemented as well. See [angular/angular#20357](https://github.com/angular/angular/issues/20357) for reference.
2. http-server uses default port 8080 and opens the browser when webpack bundles done successfully with command 
```
npm start
```
* run test
1. ./karma-test-shim.js instructs karma for all test files
2. ./karma.confi.js sets reporter/files included/webpack config/test pass threshold. Plugins used include: [karma-jasmine](https://github.com/karma-runner/karma-jasmine) to support jasmine framework, [karma-webpack](https://github.com/webpack-contrib/karma-webpack), [karma-jasmine-html-reporter](https://github.com/taras42/karma-jasmine-html-reporter) for jasmine tests dynamic report, [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter) to set threshold and run coverage report. All test framework/reporters/browser are changeable, e.g. use phantomJs to display test and karma-coverage + remap-istanbul for coverage.
3. ./webpack.test.js is the test config for webpack. [istanbul-instrument-loader](https://github.com/webpack-contrib/istanbul-instrumenter-loader) is used to instruct istanbul coverage report for source
4. if files coverage pass preset threshold, coverage will displayed in text-summary in prompt, and html report been output to './coverage' folder. http-server uses port 9000 and opens the report directly with command (posttest):
```
npm test
```
* run linting
1. './tslint.json': see [tslint rules](https://palantir.github.io/tslint/rules/) for more customized rules
