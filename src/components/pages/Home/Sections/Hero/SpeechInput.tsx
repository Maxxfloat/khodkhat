import { FaMicrophone } from 'react-icons/fa';
import useSpeechInputModel from './useSpeechInputModel';

function SpeechInput({ listening }: { listening: boolean }) {
  const { clickMicrophoneHandler } = useSpeechInputModel(listening);
  return (
    <button type="button" onClick={clickMicrophoneHandler}>
      <FaMicrophone className={`text-3xl ${listening ? 'text-red-500' : ''}`} />
    </button>
  );
}

export default SpeechInput;
