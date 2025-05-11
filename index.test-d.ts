import {expectType, expectError} from 'tsd'
import styleTextStdout, {styleTextStderr} from './index.js'

for (const styleText of [styleTextStdout, styleTextStderr]) {
  expectType<string>(styleText('foo'))
  expectType<typeof styleTextStdout>(styleText.green)
  expectError(styleText.nonExists)
  expectError(styleText(1))
  expectError(styleText())
}
