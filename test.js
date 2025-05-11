import assert from 'node:assert/strict'
import process from 'node:process'
import test from 'node:test'
import styleText from './index.js'

test('Main', () => {
  assert.equal(typeof styleText, 'function')
  assert.equal(typeof styleText.bold, 'function')
  assert.equal(typeof styleText.nonExists, 'undefined')
  assert.equal(styleText('foo'), 'foo')
  assert.equal(styleText.bold('foo'), '\u001B[1mfoo\u001B[22m')
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

  // Support alias https://nodejs.org/api/util.html#customizing-utilinspect-colors
  const aliases = [
    ['strikethrough', ['strikeThrough', 'crossedout', 'crossedOut']],
    ['hidden', ['conceal']],
    ['dim', ['faint']],
    ['inverse', ['swapcolors', 'swapColors']],
    ['doubleunderline', ['doubleUnderline']],
    ['gray', ['grey', 'blackBright']],
    ['bgGray', ['bgGrey', 'bgBlackBright']],
  ].flatMap(([style, aliases]) => aliases.map((alias) => ({style, alias})))

  for (const {style, alias} of aliases) {
    assert.equal(
      typeof styleText[alias],
      'function',
      `Should support alias: '${styleText.blue(alias)}'.`,
    )
    assert.equal(
      styleText[style]('foo'),
      styleText[alias]('foo'),
      `Alias '${styleText.blue(alias)}' should output the same as '${styleText.blue(style)}'.`,
    )
  }

  // Figure out how to test
  const notColored = 'foo'
  const redColored = '\u001B[31mfoo\u001B[39m'
  assert.notDeepEqual(overrideColorDepth({stream: process.stdout, depth: 0}), {
    stdout: notColored,
    stderr: redColored,
  })
  assert.notDeepEqual(overrideColorDepth({stream: process.stderr, depth: 0}), {
    stdout: redColored,
    stderr: notColored,
  })
})

// https://github.com/nodejs/node/blob/a822a1cbe73789a41ba30ab61deda88f2982ba3d/lib/internal/util/colors.js#L23C21-L23C34
function overrideColorDepth({stream, depth}) {
  const originalIsTty = stream.isTTY
  const originalGetColorDepth = stream.getColorDepth
  const originalForceColor = process.env.FORCE_COLOR

  try {
    delete process.env.FORCE_COLOR
    stream.isTTY = true
    stream.getColorDepth = () => depth
    return Object.fromEntries(
      ['stdout', 'stderr'].map((type) => [
        type,
        styleText.red('foo', {stream: process[type]}),
      ]),
    )
  } finally {
    if (originalForceColor !== undefined) {
      process.env.FORCE_COLOR = originalForceColor
    }
    stream.isTTY = originalIsTty
    stream.getColorDepth = originalGetColorDepth
  }
}
