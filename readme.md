# Playwright (TypeScript binding) + Cucumber (BDD)
# Assessment - To test kiwisaver calculator projections.

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders
to collaborate on defining and testing application requirements in a human-readable format. 
TypeScript is a powerful superset of JavaScript that adds optional static typing, 
making it easier to catch errors before runtime.
By combining these two tools, we can create more reliable and maintainable tests.

##Scenario
Answer all the questions and give us the projection for growth

Pre-requisites:
1. Node JS

## About the Framework
1.  Playwright
2.  Typescript
3.  Cucumber (BDD)
4.  Winston Logs
5.  Basic and Multiple reports with snapshots and videos
6.  Functional testing kiwisaver calculator with cucumber scenario and scenario outline (Data driven)
7.  Page object Model ( Not fully implemented )
8.  Github Actions yml included incase we can run on it but can easily run on any CI\CD pipeline.git 

## Features

1. Awesome report with screenshots, videos & logs
2. Execute tests on multiple environments 
3. Parallel execution
4. Github Actions integrated with downloadable report
5. Page object model - Not fully implemented.

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- config -> All the project configurations available here
- src -> Contains all the features,helpers, hooks, pages,tests & Typescript code
- test-results -> Contains all the reports related to the test.

## Reports

1. Mutilple Cucumber Reports
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots
5. Test videos
6. Trace of failure

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code/Visual studio
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change  
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Use tags to run a specific or collection of specs
```
npm run test --TAGS="@test or @functional"
```

8.  To run tests for a specific browser, --project parameter needs to be used.
 For example, to run specific scenarios for any flow only on Firefox, 

use command npx playwright test --project=firefox --grep @<scenario name>

9. By default project runs in Headless mode/but here switched to Headfull mode.

### Folder structure
0. `src\pages` -> All the pages (UI screen)
1. `src\test\features` -> Feature files here
2. `src\test\steps` -> Step definitions are here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
 Note: We can change the headless to headfull here as well, select the browser and environment.
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report` -> To generate the report
8. `config/cucumber.js` -> All the cucumber binding is done here.
9. `package.json` -> Contains all the dependencies
10.`src\helper\util` -> Read test data from json & logger for data driven approach.
