import { useState } from "react"
import WordDescription from './WordDescription';

function QwertyInput(): JSX.Element {
  const [text, setText] = useState('')

  const addCharacter = (letter: string) => {
    setText(text + letter);
    // better: setText(prev => prev + letter);
  }

  const handleBackspace = () => {
    const textMinusLast = text.slice(0, text.length - 1);
    setText(textMinusLast)
    // better:
    // setText(prev => {
    //   const prevMinusLast = prev.slice(0, prev.length - 1)
    //   return prevMinusLast
    // })
  }

  return (
    <>
      <input
        value={text}
      />
      <button onClick={() => addCharacter('Q')}>Q</button>
      <button onClick={() => addCharacter('W')}>W</button>
      <button onClick={() => addCharacter('E')}>E</button>
      <button onClick={() => addCharacter('R')}>R</button>
      <button onClick={() => addCharacter('T')}>T</button>
      <button onClick={() => addCharacter('Y')}>Y</button>
      <button onClick={() => addCharacter('U')}>U</button>
      <button onClick={() => addCharacter('I')}>I</button>
      <button onClick={() => addCharacter('O')}>O</button>
      <button onClick={() => addCharacter('P')}>P</button>
      <button onClick={() => addCharacter('?')}>?</button>
      <button onClick={() => addCharacter('!')}>!</button>
      <button onClick={() => addCharacter('£')}>£</button>
      <br />
      <button onClick={handleBackspace}>Backspace</button>
      <button onClick={() => setText('')}>Clear all</button>
      <WordDescription wordToDescribe={text} />
    </>
  )
}

export default QwertyInput;