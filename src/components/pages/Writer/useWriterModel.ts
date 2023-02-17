import { useRouter } from 'next/router';

const useWriterModel = () => {
  const router = useRouter();

  const { subject } = router.query;

  return {
    subject
  };
};

export default useWriterModel;
