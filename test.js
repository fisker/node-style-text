import styleText from './index.js'
import assert from 'node:assert/strict'
import test from 'node:test'

test('Main', () => {
  assert.equal(typeof styleText, 'function')
  assert.equal(typeof styleText.bold, 'function')
  assert.equal(typeof styleText.nonExists, 'undefined')
  assert.equal(styleText('foo'), 'foo')
  assert.equal(styleText.bold('foo'), '\x1B[1mfoo\x1B[22m')
  assert.equal(styleText.underline('foo'), '\u001B[4mfoo\u001B[24m')
  assert.equal(styleText.red('foo'), '\u001B[31mfoo\u001B[39m')
  assert.equal(styleText.bgRed('foo'), '\u001B[41mfoo\u001B[49m')
  assert.equal(
    styleText.red.bgGreen.underline('foo'),
    '\u001B[31m\u001B[42m\u001B[4mfoo\u001B[24m\u001B[49m\u001B[39m',
  )
  assert.equal(
    styleText.underline.red.bgGreen('foo'),
    '\u001B[4m\u001B[31m\u001B[42mfoo\u001B[49m\u001B[39m\u001B[24m',
  )
})
