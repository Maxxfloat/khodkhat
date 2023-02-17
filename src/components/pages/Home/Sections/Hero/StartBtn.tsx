import useStartBtnModel from './useStartBtnModel';

function StartBtn({ inputValue }: { inputValue: string }) {
  const { startHandler } = useStartBtnModel(inputValue);
  return (
    <button
      type="button"
      onClick={startHandler}
      className="px-5 py-1 mt-2 border border-black hover:bg-white ">
      Start
    </button>
  );
}

export default StartBtn;
