import Banner from './Banner';
import InputField from './InputField';
import StartBtn from './StartBtn';
import useHeroModel from './useHeroModel';

function Hero() {
  const { inputValue, setInputValue } = useHeroModel();
  return (
    <>
      <Banner />
      <div className="sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <InputField inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <StartBtn inputValue={inputValue} />
    </>
  );
}

export default Hero;
