import WriterFormType from '@/types/WriterFormType';
import numberOfPagesCalculator from '@/utils/numberOfPagesCalculator';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

const tones = [
  'Normal',
  'Formal',
  'Informal',
  'Pessimistic',
  'Optimistic',
  'Tense',
  'Curious',
  'Uplifting',
  'Aggressive',
  'Assertive',
  'Informative',
  'Entertaining',
  'Sarcastic',
  'Cooperative'
];

const useOptionsMenuModel = () => {
  const { getValues, register } = useFormContext<WriterFormType>();

  const words = getValues('words');
  const numberOfPages = numberOfPagesCalculator(words);

  return {
    tones,
    numberOfPages,
    register
  };
};

export default useOptionsMenuModel;
