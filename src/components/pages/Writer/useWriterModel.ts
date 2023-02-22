import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useWriterModel = () => {
  const [subjectValue, setSubjectValue] = useState<string>('');
  const [wordsNumber, setWordsNumber] = useState<number>(200);

  const { register } = useForm();

  return {
    subjectValue,
    setSubjectValue,
    wordsNumber,
    setWordsNumber,
    register
  };
};

export default useWriterModel;
