import useInputFieldModel from './useInputFieldModel';

function InputField() {
  const { inputValue, inputChangeHandler, postHandler } = useInputFieldModel();
  return (
    <div className="flex flex-col items-center w-full h-52">
      <div className="flex justify-center w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <input
          value={inputValue}
          onChange={inputChangeHandler}
          placeholder="Subject..."
          className="w-full p-3 m-3 text-xl border-b rounded-t shadow-md outline-none focus:border-red-600 border-merlin placeholder:text-gray-700"
        />
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
