import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useWriterModel = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const subject = router.query.subject as string;
    if (subject) {
      setInputValue(subject);
    }

    return () => {};
  }, [setInputValue, router]);

  return {
    inputValue,
    setInputValue
  };
};

export default useWriterModel;
