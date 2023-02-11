import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/libs/axios/instance';
import { useRouter } from 'next/router';

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

  return {
    inputValue,
    inputChangeHandler,
    postHandler
  };
};

export default useInputFieldModel;
