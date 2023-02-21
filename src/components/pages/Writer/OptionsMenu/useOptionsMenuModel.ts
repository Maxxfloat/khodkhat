import numberOfPagesCalculator from '@/utils/numberOfPagesCalculator';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const tones = [
  'Formal',
  'Informal',
  'Pessimistic',
  'Optimistic',
  'Tense',
  'Curious',
  'Uplifting',
  'Aggressive',
  'Assertive',
  'Informative',
  'Entertaining',
  'Sarcastic',
  'Cooperative'
];

const useOptionsMenuModel = (words: number, setWords: Dispatch<SetStateAction<number>>) => {
  const numberOfPages = numberOfPagesCalculator(words);

  const wordsNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const wordsNumber = parseFloat(e.target.value);
    if (Number.isNaN(wordsNumber) || wordsNumber < 200) {
      setWords(200);
    }
    setWords(wordsNumber);
  };

  return {
    tones,
    numberOfPages,
    wordsNumberChangeHandler
  };
};

export default useOptionsMenuModel;
