import { Dispatch, SetStateAction } from 'react';
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
    <form className="w-full p-3 capitalize border border-black">
      <fieldset>
        <legend className="mb-3 font-bold">Article Writer</legend>
        <div className="grid grid-flow-row grid-cols-2 gap-12">
          <div className="flex flex-col">
            <label htmlFor="words">words</label>
            <div className="p-1 bg-white border-b border-black shadow-md focus-within:border-red-500">
              <input
                type="number"
                min="200"
                id="words"
                className="outline-none mie-2 "
                value={wordsNumber}
                onChange={wordsNumberChangeHandler}
              />
              <span>about {numberOfPages} pages</span>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tone">tone</label>
            <select id="tone">
              {tones.map((tone) => {
                return <option key={tone}>{tone}</option>;
              })}
            </select>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default OptionsMenu;
