import SpeechInput from './SpeechInput';
import useInputFieldModel from './useInputFieldModel';

function InputField() {
  const {
    inputValue,
    listening,
    inputChangeHandler,
    postHandler,
    clickMicrophoneHandler,
    resetHandler
  } = useInputFieldModel();

  return (
    <div className="flex flex-col items-center w-full min-h-[13rem]">
      <div className="flex justify-center w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
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
      <button
        type="button"
        onClick={postHandler}
        className="px-3 py-1 mt-2 border border-black hover:bg-white ">
        Start
      </button>
    </div>
  );
}

export default InputField;
