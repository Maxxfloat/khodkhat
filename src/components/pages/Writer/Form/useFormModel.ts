import WriterFormType from '@/types/WriterFormType';
import { useFormContext } from 'react-hook-form';

const useFormModel = () => {
  const { handleSubmit } = useFormContext<WriterFormType>();
  const onSubmit = (data: WriterFormType) => console.log(data);

  const submitHandler = handleSubmit(onSubmit);

  return { submitHandler };
};

export default useFormModel;
