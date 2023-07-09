import { hasAVowel } from "../utils/hasAVowel"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const specialCharacters = /[!?£]/;
  const hasSpecialCharacter = wordToDescribe.toLowerCase().match(specialCharacters);

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {hasSpecialCharacter && <li>Contains a special character</li>}
    </ul>
  )
}

export default WordDescription