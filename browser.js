const styleText = new Proxy(String, {
  get: () => styleText,
  apply: (target, __, [text]) => target(text),
})

export default styleText
