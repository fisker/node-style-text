import util from 'node:util'

const factory = (options, ...formats) =>
  new Proxy((text) => util.styleText(formats, text, options), {
    get: (_, format) =>
      util.inspect.colors[format] && factory(options, ...formats, format),
  })

export default factory()
export const styleTextStderr = factory({stream: process.stderr})
