import type { Dispatch, SetStateAction } from 'react';

const navMenuToggleModel = (setNavMenuOpen: Dispatch<SetStateAction<boolean>>) => {
  const toggleBtnHandler = () => {
    setNavMenuOpen((v) => !v);
  };

  return {
    toggleBtnHandler
  };
};

export default navMenuToggleModel;
