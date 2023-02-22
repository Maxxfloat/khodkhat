import SubjectField from '@/components/InputFields/SubjectField';
import OptionsMenu from './Form/OptionsMenu/OptionsMenu';
import useWriteModel from './useWriterModel';

function Writer() {
  const { setSubjectValue, subjectValue, wordsNumber, setWordsNumber, register } = useWriteModel();
  return (
    <div className="flex flex-col items-center">
      <div className="mx-1 sm:mx-0 sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <SubjectField subjectValue={subjectValue} setSubjectValue={setSubjectValue} />
        <OptionsMenu wordsNumber={wordsNumber} setWordsNumber={setWordsNumber} />
      </div>
    </div>
  );
}

export default Writer;
