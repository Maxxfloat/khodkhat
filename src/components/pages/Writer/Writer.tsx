import InputField from '../Home/Sections/Hero/InputField';
import useWriteModel from './useWriterModel';

function Writer() {
  const { inputValue, setInputValue } = useWriteModel();
  return (
    <div>
      <InputField inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default Writer;
