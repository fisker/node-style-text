// `String.cooked` https://github.com/tc39/proposal-string-cooked
const stringCooked = (raw, ...substitutions) =>
  String.raw({raw}, ...substitutions)

// `Reflect.isTemplateObject` https://github.com/tc39/proposal-array-is-template-object
const reflectIsTemplateObject = (value) => Array.isArray(value) && value.raw

function runStyleText(
  styleText,
  formats,
  textOrTemplateObject,
  ...substitutions
) {
  return styleText(
    formats,
    reflectIsTemplateObject(textOrTemplateObject)
      ? stringCooked(textOrTemplateObject, substitutions)
      : textOrTemplateObject,
  )
}

const factory = (styleText, ...formats) =>
  new Proxy(runStyleText.bind(styleText, styleText, formats), {
    get: (_, format) => factory(styleText, ...formats, format),
  })

export {factory}
