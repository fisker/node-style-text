import type {styleText as nodeUtilStyleText} from 'node:util'

type OmitArray<T> = T extends (infer U)[] ? U : T
type Formats = OmitArray<Parameters<typeof nodeUtilStyleText>[0]>
type Text = Parameters<typeof nodeUtilStyleText>[1]
type StyleTextReturnType = ReturnType<typeof nodeUtilStyleText>

type StyleText = {
  /**
  Returns a formatted text with `format` applied.
  @param text - Text to add style.

  The full list of formats can be found in [colors](https://nodejs.org/docs/latest/api/util.html#customizing-utilinspect-colors).

  @example
  ```
  import styleText from 'nodeStyle';

  styleText.red('Hello, world!');
  styleText.bold('Hello, world!');
  styleText.red.bold('Hello, world!');
  ```
  */
  (text: Text): StyleTextReturnType
} & {[key in Formats]: StyleText}

/**
Returns a formatted text with `format` applied.
@param text - Text to add style.

The full list of formats can be found in [colors](https://nodejs.org/docs/latest/api/util.html#customizing-utilinspect-colors).

@example
```
import styleText from 'nodeStyle';

styleText.red('Hello, world!');
styleText.bold('Hello, world!');
styleText.red.bold('Hello, world!');
```
*/
declare const styleText: StyleText
declare const styleTextStderr: StyleText

export default styleText
export {styleTextStderr}
