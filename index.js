import util from 'node:util'

const factory = (...formats) =>
  new Proxy((text) => util.styleText(formats, text), {
    get: (_, format) =>
      util.inspect.colors[format] && factory(...formats, format),
  })

export default factory()
export const styleTextStderr = factory()
