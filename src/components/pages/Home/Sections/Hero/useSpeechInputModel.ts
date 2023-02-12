import SpeechRecognition from 'react-speech-recognition';

const useSpeechInputModel = (listening: boolean) => {
  const clickMicrophoneHandler = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return {
    clickMicrophoneHandler
  };
};

export default useSpeechInputModel;
