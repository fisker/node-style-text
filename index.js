import util from 'node:util'

const factory = (format = []) =>
  new Proxy(util.styleText, {
    get: (_, property) =>
      util.inspect.colors[property] && factory([...format, property]),
    apply: (target, _, [text]) => target(format, text),
  })

const styleText = factory()

export default styleText
