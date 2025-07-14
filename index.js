import util from 'node:util'

const factory = (...formats) =>
  new Proxy(util.styleText.bind(util, formats), {
    get: (_, format) => factory(...formats, format),
  })

export default factory()
