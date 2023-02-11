import useInputFieldModel from './useInputFieldModel';

function InputField() {
  const { inputValue, inputChangeHandler, postHandler } = useInputFieldModel();
  return (
    <div>
      <input value={inputValue} onChange={inputChangeHandler} />
      <button type="button" onClick={postHandler}>
        Write
      </button>
    </div>
  );
}

export default InputField;
