
import * as React from 'react'
import { TypingTest } from '../pages/typing-test'
import { css, Global } from '@emotion/core'
import { column } from './../../css/layouts/column'
import { fullSize } from './../../css/sizes/full-size'
import { fonts } from './../../css/fonts'
import { margins } from './../../css/variables/margins'

export function Main() {
  return (
    <div css={style.base}>
      <Global styles={globalStyle}/>
      <TypingTest />
    </div>
  )
}

const globalStyle = css({
  '*': {
    flexGrow: '0',
    flexShrink: '0',
  },

  'html, body': {
    ...fullSize,

    margin: 0,
    padding: 0,
    webkitOverflowScrolling: 'touch',
    quotes: `'\201c' '\201d'`,
    overflow: 'hidden',
  },

  html: {
    overflowY: 'scroll',
  },

  body: {
    ...fonts.paragraph,
    minHeight: 'max(100vh, 320px)',
    padding: margins.regular,
  },

  '#main': {
    ...fullSize,
  }
})

const style = {
  base: css({
    ...fullSize,
  },
})
