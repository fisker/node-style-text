import {styleText} from 'node:util'

type Format = Parameters<typeof styleText>[0]

type StyleText = ((text: string) => string) & {
  [key in Format]: StyleText
}

export default StyleText
