# node-style-text

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/node-style-text.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/node-style-text
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
import styleText, {styleTextStderr} from 'node-style-text'

console.log(styleText.blue.underline('Hello world!'))
console.error(styleTextStderr.blue.underline('Hello world!'))
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

### `styleText.<format>[.<format>...](string)`

Example: `styleText.red.bold.underline('Hello, world!');`

Available formats: [`util.inspect.colors`](https://nodejs.org/api/util.html#customizing-utilinspect-colors)
