import util from 'node:util'

const factory = (...formats) =>
  new Proxy(util.styleText.bind(util, formats), {
    get(_, format) {
      return factory(...formats, format)
    },
    apply(target, thisArg, args) {
      if (args[0].raw) {
        args = [String.raw({raw: args[0]}, ...args.slice(1))]
      }
      return Reflect.apply(target, thisArg, args)
    },
  })

export default factory()
