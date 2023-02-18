import { useRouter } from 'next/router';

const useStartBtnModel = (inputValue: string) => {
  const router = useRouter();
  const startHandler = () => {};

  return { startHandler };
};

export default useStartBtnModel;
