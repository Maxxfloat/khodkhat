import { useRouter } from 'next/router';

const useStartBtnModel = (inputValue: string) => {
  const router = useRouter();
  const startHandler = () => {
    if (inputValue === '') {
      router.push('writer');
    }
    router.push({
      pathname: 'writer',
      query: {
        subject: inputValue
      }
    });
  };

  return { startHandler };
};

export default useStartBtnModel;
