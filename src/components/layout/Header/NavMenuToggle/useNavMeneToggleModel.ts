import { useContext } from 'react';
import HeaderProvider from '../HeaderProvider';

const useNavMenuToggleModel = () => {
  const { navMenuOpen, setNavMenuOpen } = useContext(HeaderProvider);
  const toggleBtnHandler = () => {
    setNavMenuOpen((v) => !v);
  };

  return {
    navMenuOpen,
    toggleBtnHandler
  };
};

export default useNavMenuToggleModel;
