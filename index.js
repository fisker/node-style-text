import util from 'node:util'

const factory = (formats = []) =>
  new Proxy(util.styleText.bind(util, formats), {
    get: (target, property) =>
      util.inspect.colors[property] && factory([...formats, property]),
  })

export default factory()
