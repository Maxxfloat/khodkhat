import { FaMicrophone } from 'react-icons/fa';
import useSpeechInputModel from './useSpeechInputModel';

function SpeechInput() {
  const { listening, clickMicrophoneHandler } = useSpeechInputModel();
  return (
    <div>
      <FaMicrophone
        onClick={clickMicrophoneHandler}
        className={`text-3xl ${listening ? 'text-red-500' : ''}`}
      />
    </div>
  );
}

export default SpeechInput;
