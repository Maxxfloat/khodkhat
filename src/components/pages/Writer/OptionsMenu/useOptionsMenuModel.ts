import numberOfPagesCalculator from '@/utils/numberOfPagesCalculator';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

const useOptionsMenuModel = (words: number, setWords: Dispatch<SetStateAction<number>>) => {
  const numberOfPages = numberOfPagesCalculator(words);

  const wordsNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const wordsNumber = e.target.value;
    setWords(parseFloat(wordsNumber));
  };

  return {
    numberOfPages,
    wordsNumberChangeHandler
  };
};

export default useOptionsMenuModel;
