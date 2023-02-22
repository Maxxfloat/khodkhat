import { Dispatch, SetStateAction } from 'react';
import WriterOptionInputWrapper from '@/components/InputFields/WriterOptionInputWrapper';
import useOptionsMenuModel from './useOptionsMenuModel';

function OptionsMenu({
  wordsNumber,
  setWordsNumber
}: {
  wordsNumber: number;
  setWordsNumber: Dispatch<SetStateAction<number>>;
}) {
  const { wordsNumberChangeHandler, numberOfPages, tones } = useOptionsMenuModel(
    wordsNumber,
    setWordsNumber
  );

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-x-12 gap-y-5">
      <WriterOptionInputWrapper label="words">
        <input
          type="number"
          min="200"
          id="words"
          className="outline-none mie-2 "
          value={wordsNumber}
          onChange={wordsNumberChangeHandler}
        />
        <span>about {numberOfPages} pages</span>
      </WriterOptionInputWrapper>
      <WriterOptionInputWrapper label="tone">
        <select id="tone" className="w-full">
          {tones.map((tone) => {
            return (
              <option className="w-full" key={tone}>
                {tone}
              </option>
            );
          })}
        </select>
      </WriterOptionInputWrapper>
      <WriterOptionInputWrapper label="more data">
        <textarea id="more data">what</textarea>
      </WriterOptionInputWrapper>
    </div>
  );
}

export default OptionsMenu;
