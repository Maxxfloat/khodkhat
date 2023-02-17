import { Dispatch, SetStateAction } from 'react';
import SpeechInput from './SpeechInput';
import useInputFieldModel from './useInputFieldModel';

function InputField({
  inputValue,
  setInputValue
}: {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}) {
  const { listening, inputChangeHandler, clickMicrophoneHandler, resetHandler } =
    useInputFieldModel(inputValue, setInputValue);

  return (
    <div className="flex justify-center w-full min-h-full">
      <div className="flex w-full m-3 text-xl bg-white border-b rounded-t shadow-md focus-within:border-red-600 border-merlin">
        <textarea
          value={inputValue}
          onChange={inputChangeHandler}
          placeholder="Subject..."
          className="py-4 border-b outline-none grow placeholder:text-gray-700 pis-3 "
        />
        <button
          type="button"
          className="self-start p-3 border-black rounded-bl border-is border-be "
          onClick={resetHandler}>
          X
        </button>
      </div>
      <div className={`text-3xl flex items-center ${listening ? 'text-red-500' : ''}`}>
        <SpeechInput clickMicrophoneHandler={clickMicrophoneHandler} />
      </div>
    </div>
  );
}

export default InputField;
