import { FaMicrophone } from 'react-icons/fa';

function SpeechInput({ clickMicrophoneHandler }: { clickMicrophoneHandler: () => void }) {
  return (
    <button type="button" onClick={clickMicrophoneHandler}>
      <FaMicrophone />
    </button>
  );
}

export default SpeechInput;
