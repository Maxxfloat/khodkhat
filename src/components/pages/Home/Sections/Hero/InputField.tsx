import useInputFieldModel from './useInputFieldModel';

function InputField() {
  const { inputValue, inputChangeHandler, postHandler } = useInputFieldModel();
  return (
    <div className="flex flex-col items-center h-52 md:w-1/2">
      <input
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder="Subject..."
        className="p-3 m-3 text-xl border-b rounded-t shadow-md outline-none focus:border-red-600 border-merlin placeholder:text-gray-700 "
      />
      <button
        type="button"
        onClick={postHandler}
        className="px-3 py-1 mt-2 border border-black w-fit hover:bg-white ">
        Start
      </button>
    </div>
  );
}

export default InputField;
