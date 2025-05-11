import utility from 'node:util'

const factory = (options, ...formats) =>
  new Proxy((text) => utility.styleText(formats, text, options), {
    get: (_, format) =>
      utility.inspect.colors[format] && factory(options, ...formats, format),
  })

export default factory()
export const styleTextStderr = factory({stream: process.stderr})
