import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechInputModel = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.stopListening();
    }
  };

  return {
    clickMicrophoneHandler,
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  };
};

export default useSpeechInputModel;
