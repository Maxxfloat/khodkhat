import WriterFormType from '@/types/WriterFormType';
import { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSubjectFieldModel = () => {
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

  const { setValue, register, resetField, getValues } = useFormContext<WriterFormType>();

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const { onChange, ...moreRegister } = register('subject');

  useEffect(() => {
    setValue('subject', `${beforeSpeechValue}${transcript}`);
  }, [setValue, transcript, beforeSpeechValue]);

  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      setBeforeSpeechValue(getValues('subject'));
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ target: e.currentTarget });
    if (listening) {
      SpeechRecognition.abortListening();
    }
  };

  const resetHandler = () => {
    setBeforeSpeechValue('');
    resetTranscript();
    resetField('subject', { defaultValue: '' });
  };

  return {
    inputChangeHandler,
    moreRegister,
    listening,
    resetHandler,
    clickMicrophoneHandler
  };
};

export default useSubjectFieldModel;
