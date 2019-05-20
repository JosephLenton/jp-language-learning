
import * as React from 'react'
import { css } from '@emotion/core'
import { fonts } from '../../css/fonts'

export interface TitleProps {
  children : React.ReactNode
}

export function Title( props:TitleProps ) {
  return <h1 css={css(style.base)}>
    {props.children}
  </h1>
}

const style = {
  base: css(
    fonts.h1,
    {
      width: '100%',
      flexGrow: 0,
      textAlign: 'center',
    },
  ),
}