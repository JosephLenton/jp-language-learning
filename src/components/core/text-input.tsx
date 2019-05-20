
import * as React from 'react'
import { css } from '@emotion/core'
import { margins } from '../../css/variables/margins'

export interface TextInputProps {
  autoFocus : boolean
  value : string
  onChange : ( value:string ) => void
}

export const TextInput = React.forwardRef(( props : TextInputProps, ref:React.RefObject<HTMLInputElement> ) => {
  return <input type="text" ref={ref} autoFocus={props.autoFocus} css={style} value={props.value} onChange={ev => props.onChange(ev.target.value)} />
})

const style = css(
  {
    padding: margins.regular,
  }
)
