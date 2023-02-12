import SpeechInput from './SpeechInput';
import useInputFieldModel from './useInputFieldModel';

function InputField() {
  const { inputValue, listening, inputChangeHandler, postHandler } = useInputFieldModel();

  return (
    <div className="flex flex-col items-center w-full h-52">
      <div className="flex justify-center w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <div className="flex w-full m-3 text-xl bg-white border-b rounded-t shadow-md focus:border-red-600 border-merlin">
          <input
            value={inputValue}
            onChange={inputChangeHandler}
            placeholder="Subject..."
            className="outline-none grow placeholder:text-gray-700 pis-3"
          />
          <button type="button" className="h-full p-3">
            X
          </button>
        </div>
        <SpeechInput listening={listening} />
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
