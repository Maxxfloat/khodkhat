import useWriteModel from './useWriterModel';

function Writer() {
  const { subject } = useWriteModel();
  return (
    <div>
      <p>{subject}</p>
    </div>
  );
}

export default Writer;
