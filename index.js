import util from 'node:util'
import process from 'node:process'

const createColors = (options) => {
  const factory = (...formats) =>
    new Proxy((text) => util.styleText(formats, text, options), {
      get: (_, format) =>
        util.inspect.colors[format] && factory(...formats, format),
    })
  return factory()
}

export default createColors()
export const styleTextStderr = createColors({stream: process.stderr})
