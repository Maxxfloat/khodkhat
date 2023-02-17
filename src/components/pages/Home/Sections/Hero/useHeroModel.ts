import { useState } from 'react';

const useHeroModel = () => {
  const [inputValue, setInputValue] = useState<string>('');

  return {
    inputValue,
    setInputValue
  };
};

export default useHeroModel;
