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
import styleText from 'node-style-text'

console.log(styleText.blue.underline('Hello world!'))
console.log(styleText.blue.underline`Hello ${'world'}!`))
```

Use `process.stderr` to validate colors.

```js
import {stdout, stderr} from 'node-style-text'

// Validate `process.stderr` if it can be colored instead of `process.stdout`.
console.log(stderr.underline('Hello world!'))
```

Check [`options.stream` for `util.styleText`](https://nodejs.org/api/util.html#utilstyletextformat-text-options) for details.

## Motivation

Provide convenience API.

1. Chainable

   ```diff
   - import {styleText} from 'node:util'
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

2. Support [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

   ```diff
   - import {styleText} from 'node:util'
   + import styleText from 'node-style-text'

   console.log(
   -   styleText(['blue', 'underline'], `Hello ${'world'}!`)
   +   styleText.blue.underline`Hello ${'world'}!`
   )
   ```

## API

### `styleText.<format>[.<format>...](string)`

Example: `styleText.red.bold.underline('Hello, world!');`

Available formats: [`util.inspect.colors`](https://nodejs.org/api/util.html#customizing-utilinspect-colors)

## Style

This module also provide an ESLint config to enforce use tagged templates when possible

```js
// ✅
styleText.red(`foo`)

// ❌
styleText.red`foo`
```

Add this to you `eslint.config.js`

```js
import eslintConfigNodeStyleText from 'node-style-text/eslint-config'

export default [
  // ... Your other eslint configs
  eslintConfigNodeStyleText,
]
```
