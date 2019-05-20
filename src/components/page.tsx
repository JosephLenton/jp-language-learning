
import * as React from 'react'
import { css } from '@emotion/core'
import { column } from '/css/layouts/column'
import { fullSize } from '/css/sizes/full-size'

export interface PageProps {
  children : React.ReactNode
}

export function Page( props:PageProps ) {
  return <div css={styles.page}>
    {props.children}
  </div>
}

const styles = {
  page: css(
    column,
    fullSize,
  ),
}
