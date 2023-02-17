import Banner from './Banner';
import InputField from './InputField';
import StartBtn from './StartBtn';
import useHeroModel from './useHeroModel';

function Hero() {
  const { inputValue, setInputValue } = useHeroModel();
  return (
    <>
      <Banner />
      <InputField inputValue={inputValue} setInputValue={setInputValue} />
      <StartBtn inputValue={inputValue} />
    </>
  );
}

export default Hero;
