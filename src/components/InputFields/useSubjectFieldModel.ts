import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSubjectFieldModel = (
  subjectValue: string,
  setSubjectValue: Dispatch<SetStateAction<string>>
) => {
  const [beforeSpeechValue, setBeforeSpeechValue] = useState<string>('');

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    setSubjectValue(`${beforeSpeechValue}${transcript}`);
  }, [setSubjectValue, transcript, beforeSpeechValue]);

  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      setBeforeSpeechValue(subjectValue);
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubjectValue(e.currentTarget.value);
    if (transcript) {
      SpeechRecognition.abortListening();
    }
  };

  const resetHandler = () => {
    setBeforeSpeechValue('');
    resetTranscript();
    setSubjectValue('');
  };

  return {
    inputChangeHandler,
    listening,
    resetHandler,
    clickMicrophoneHandler
  };
};

export default useSubjectFieldModel;
