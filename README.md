# React Native Template
A Starter template for React Native projects.

## Usage
 Create a new project passing a template:
 ```
 react-native init [ProjectName] --template vitorverasm-starter
 ```
 Wait for it to install...

## Additional steps for configuration

**Execute the following command(on the project folder):**

```shell
node postInstall.js
```

**or follow [this](https://gist.github.com/0c51a0078d62c3c0fb406d7618d6a922.git) steps...**

## Scripts

|Script|Função|
|--|-|
| release | Generates the app release version that will stay in `/android/app/build/outputs/apk/release`.|
| debug | Generates the app debug version that will stay in `/android/app/build/outputs/apk/debug`.|
| clean | Clean gradle cache files. |
| build:dev | Uses `clean`, `debug ` to build the app debug version. |
| build:release | Uses `clean`, `release ` to build the app release version. |
| start | Starts node dev server(metro). |
| test | Run all tests suites. |
| test:snap | Run all testes and update the [snapshots](https://jestjs.io/docs/en/snapshot-testing) if needed. |
| test:watch | Run tests and watch for changes in tests suites |
| test:coverage | Run all tests and calculate the test coverage which is saved to `/coverage/lcov-report/index.html` ). |
| lint | Run the [linting](https://eslint.org/) process for all files inside `/src`. |
| lint:fix | Run the [linting](https://eslint.org/) process for all files inside `/src` and try to fix errors. |

## Git hooks e coverage

For this project we have [git hooks](https://github.com/typicode/husky) and a [coverage checker](https://github.com/istanbuljs/nyc).

| Hook | Descrição |
|--|--|
| pre-commit | Run lint command |
| pre-push| Run tests coverage with the conditions adopted in the nyc config(package.json) |

## Authors
 * **Vitor Veras** - [Github](https://github.com/vitorverasm)
