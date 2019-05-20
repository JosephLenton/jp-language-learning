
import * as React from 'react'
import * as words from '../../words'
import * as random from '../../util/random'
import { Page } from '../page'
import { Title } from '../core/title'
import { ref } from '../../util/ref'
import { css } from '@emotion/core'

export function TypingTest() {
  const [jpWord, setJPWord] = React.useState(  randomWord() )
  const [inputWord, setInputWord] = React.useState('')
  const inputRef = ref<HTMLInputElement>()

  return <Page>
    <Title>Write the word</Title>

    <p>{jpWord}</p>

    <div css={style.midDiv}>
      <input type="text" ref={inputRef} autoFocus value={inputWord} onChange={ev => setInputWord(ev.target.value)}></input>
      <button onClick={() => resetState()}>Next</button>
    </div>

    <div css={style.bottomDiv}>
      <button onClick={() => resetState()}>skip</button>
      <button onClick={() => resetState()}>answer</button>
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
  midDiv: css({
    width: '100%',
  }),

  bottomDiv: css({
    width: '100%',
  }),
}
