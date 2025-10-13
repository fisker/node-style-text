import util from 'node:util'

const factory = (...formats) =>
  new Proxy(
    (...args) => {
      if (args[0].raw) {
        args = [String.raw({raw: args[0]}, ...args.slice(1))]
      }
      return util.styleText(formats, ...args)
    },
    {
      get(_, format) {
        return factory(...formats, format)
      },
    },
  )

export default factory()
