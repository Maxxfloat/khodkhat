import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/libs/axios/instance';
import { useRouter } from 'next/router';

const usePostSubject = () => {
  const router = useRouter();

  const postSubjectMutation = useMutation({
    mutationFn(value: string | undefined) {
      return axiosInstance.post('/posts', value);
    },
    onSuccess() {
      router.push('write');
    }
  });

  return postSubjectMutation;
};

export default usePostSubject;
