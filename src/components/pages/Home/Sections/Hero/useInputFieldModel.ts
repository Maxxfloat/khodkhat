import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useInputFieldModel = (
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>
) => {
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

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

  return {
    inputChangeHandler,
    listening,
    resetHandler,
    clickMicrophoneHandler
  };
};

export default useInputFieldModel;
