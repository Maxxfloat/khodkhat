import InputField from '../Home/Sections/Hero/InputField';
import OptionsMenu from './OptionsMenu/OptionsMenu';
import useWriteModel from './useWriterModel';

function Writer() {
  const { setSubjectValue, subjectValue, wordsNumber, setWordsNumber } = useWriteModel();
  return (
    <div>
      <InputField inputValue={subjectValue} setInputValue={setSubjectValue} />
      <OptionsMenu wordsNumber={wordsNumber} setWordsNumber={setWordsNumber} />
    </div>
  );
}

export default Writer;
