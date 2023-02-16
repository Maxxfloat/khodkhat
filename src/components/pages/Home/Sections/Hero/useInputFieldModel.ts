import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import usePostSubject from '@/data/usePostSubject';
import { useRouter } from 'next/router';

const useInputFieldModel = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

  const router = useRouter();

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setInputValue(`${beforeSpeechValue}${transcript}`);
  }, [setInputValue, transcript, beforeSpeechValue]);

  const postSubjectMutation = usePostSubject();

  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      setBeforeSpeechValue(inputValue);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
    if (transcript) {
      SpeechRecognition.abortListening();
    }
  };

  const resetHandler = () => {
    setBeforeSpeechValue('');
    resetTranscript();
    setInputValue('');
  };

  const startHandler = () => {
    if (inputValue === '') {
      router.push('write');
    }
    postSubjectMutation.mutate(inputValue);
  };

  return {
    inputValue,
    inputChangeHandler,
    startHandler,
    listening,
    resetHandler,
    clickMicrophoneHandler
  };
};

export default useInputFieldModel;
