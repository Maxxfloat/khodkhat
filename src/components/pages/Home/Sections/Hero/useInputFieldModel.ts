import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useSpeechRecognition } from 'react-speech-recognition';
import axiosInstance from '@/libs/axios/instance';

const useInputFieldModel = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const router = useRouter();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const postSubjectMutation = useMutation({
    mutationFn(value: string | undefined) {
      return axiosInstance.post('/posts', value);
    },
    onSuccess() {
      router.push('write');
    }
  });

  const postHandler = () => {
    postSubjectMutation.mutate(inputValue);
  };

  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setInputValue(transcript);
  }, [setInputValue, transcript]);

  return {
    setInputValue,
    inputValue,
    inputChangeHandler,
    postHandler,
    listening
  };
};

export default useInputFieldModel;
