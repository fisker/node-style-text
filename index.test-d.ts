import {expectType, expectError} from 'tsd'
import styleText from './index.js'

expectType<string>(styleText('foo'))
expectType<typeof styleText>(styleText.green)
expectError(styleText.nonExists)
expectError(styleText(1))
expectError(styleText())
