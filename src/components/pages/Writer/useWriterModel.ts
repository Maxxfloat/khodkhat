import WriterFormType from '@/types/WriterFormType';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useWriterModel = () => {
  const formMethods = useForm<WriterFormType>({
    values: { subject: '', words: 200, tone: 'formal' }
  });

  return {
    formMethods
  };
};

export default useWriterModel;
