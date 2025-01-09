# node-style-text

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/actions/workflow/status/fisker/node-style-text/continuous-integration.yml?branch=main&style=flat-square
[github_actions_link]: https://github.com/fisker/node-style-text/actions?query=branch%3Amain
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/node-style-text/main?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/node-style-text?branch=main
[license_badge]: https://img.shields.io/npm/l/node-style-text.svg?style=flat-square
[license_link]: https://github.com/fisker/node-style-text/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/node-style-text.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/node-style-text

> Chainable [`util.styleText()`](https://nodejs.org/api/util.html#utilstyletextformat-text-options).

## Install

```bash
yarn add node-style-text
```

## Usage

```js
import styleText from 'node-style-text'

console.log(styleText.blue.underline('Hello world!'))
```

## Motivation

Provide convenience API.

```diff
- import {styleText} from 'node:utils'
+ import styleText from 'node-style-text'

console.log(
-   styleText('blue', 'Hello world!')
+   styleText.blue('Hello world!')
)

console.log(
-   styleText(['blue', 'underline'], 'Hello world!')
+   styleText.blue.underline('Hello world!')
)
```

## API

`styleText.<format>[.<format>...](string)`

Example: `styleText.red.bold.underline('Hello', 'world');`

Available formats: [`util.inspect.colors`](https://nodejs.org/api/util.html#customizing-utilinspect-colors)
