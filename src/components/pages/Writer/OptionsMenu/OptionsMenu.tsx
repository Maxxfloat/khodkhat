import { Dispatch, SetStateAction } from 'react';
import useOptionsMenuModel from './useOptionsMenuModel';

function OptionsMenu({
  wordsNumber,
  setWordsNumber
}: {
  wordsNumber: number;
  setWordsNumber: Dispatch<SetStateAction<number>>;
}) {
  const { wordsNumberChangeHandler } = useOptionsMenuModel(wordsNumber, setWordsNumber);

  return (
    <div>
      <div>
        <input type="number" value={wordsNumber} onChange={wordsNumberChangeHandler} />
        <span>pages</span>
      </div>
    </div>
  );
}

export default OptionsMenu;
