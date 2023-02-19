import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useWriterModel = () => {
  const [subjectValue, setSubjectValue] = useState<string>('');
  const [wordsNumber, setWordsNumber] = useState<number>(200);

  return {
    subjectValue,
    setSubjectValue,
    wordsNumber,
    setWordsNumber
  };
};

export default useWriterModel;
