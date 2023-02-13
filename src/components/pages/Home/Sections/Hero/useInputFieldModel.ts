import { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import usePostSubject from '@/data/usePostSubject';

const useInputFieldModel = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

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

  const postHandler = () => {
    postSubjectMutation.mutate(inputValue);
  };

  return {
    setInputValue,
    inputValue,
    inputChangeHandler,
    postHandler,
    listening,
    resetHandler,
    clickMicrophoneHandler
  };
};

export default useInputFieldModel;
