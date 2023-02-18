import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useWriterModel = () => {
  const [subjectValue, setSubjectValue] = useState<string>('');
  const [wordsNumber, setWordsNumber] = useState<number>(200);

  const router = useRouter();

  useEffect(() => {
    const subject = router.query.subject as string;
    if (subject) {
      setSubjectValue(subject);
    }

    return () => {};
  }, [subjectValue, router]);

  return {
    subjectValue,
    setSubjectValue,
    wordsNumber,
    setWordsNumber
  };
};

export default useWriterModel;
