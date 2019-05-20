
import * as React from 'react'
import * as words from '../../words'
import * as random from '../../util/random'
import { Page } from '../page'
import { Title } from '../core/title'
import { TextInput } from '../core/text-input'
import { ref } from '../../util/ref'
import { row } from '../../css/layouts/row'
import { margins } from '../../css/variables/margins'
import { css } from '@emotion/core'

export function TypingTest() {
  const [jpWord, setJPWord] = React.useState(  randomWord() )
  const [inputWord, setInputWord] = React.useState('')
  const inputRef = ref<HTMLInputElement>()

  return <Page>
    <Title>Write the word</Title>

    <p css={style.jpWord}>{jpWord}</p>

    <div css={style.midDiv}>
      <TextInput ref={inputRef} autoFocus value={inputWord} onChange={value => setInputWord(value)} />
      <button disabled={inputWord == ''} onClick={() => resetState()}>Next</button>
    </div>

    <div css={style.bottomDiv}>
      <button onClick={() => resetState()}>Show answer</button>
      <button onClick={() => resetState()}>Skip</button>
    </div>
  </Page>

  function resetState() {
    setJPWord( randomWord() )
    setInputWord('')

    inputRef.focus()
  }
}

function randomWord() {
  const wordI = random.int( 0, words.WORDS.length )

  return words.WORDS[ wordI ]
}

const style = {
  jpWord: css({
    width: '100%',
    textAlign: 'center',
  }),

  midDiv: css(
    row,
    {
      alignItems: 'center',
      marginBottom: margins.xLarge,
    }
  ),

  bottomDiv: css(
    row,
    {
      justifyContent: 'space-between',
    }
  ),
}
