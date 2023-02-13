import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axiosInstance from '@/libs/axios/instance';

const useInputFieldModel = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

  const router = useRouter();

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setInputValue(`${beforeSpeechValue}${transcript}`);
  }, [setInputValue, transcript, beforeSpeechValue]);

  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      setBeforeSpeechValue(inputValue);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const resetHandler = () => {
    setBeforeSpeechValue('');
    resetTranscript();
    setInputValue('');
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
    if (transcript) {
      SpeechRecognition.abortListening();
    }
  };

  const postSubjectMutation = useMutation({
    mutationFn(value: string | undefined) {
      return axiosInstance.post('/posts', value);
    },
    onSuccess() {
      router.push('write');
    }
  });

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
