import { Dispatch, SetStateAction } from 'react';
import SpeechInput from '../pages/Home/Sections/Hero/SpeechInput';
import useSubjectFieldModel from './useSubjectFieldModel';

function SubjectField({
  subjectValue,
  setSubjectValue
}: {
  subjectValue: string;
  setSubjectValue: Dispatch<SetStateAction<string>>;
}) {
  const { listening, inputChangeHandler, clickMicrophoneHandler, resetHandler } =
    useSubjectFieldModel(subjectValue, setSubjectValue);

  return (
    <div className="flex justify-center w-full min-h-full">
      <div className="flex w-full text-xl bg-white border-b rounded-t shadow-md mie-3 focus-within:border-red-600 border-merlin">
        <textarea
          value={subjectValue}
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

export default SubjectField;
