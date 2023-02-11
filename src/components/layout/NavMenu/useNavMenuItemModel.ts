import { useContext } from 'react';
import HeaderProvider from '../Header/HeaderProvider';

const useNavMenuItemModel = () => {
  const { navMenuOpen, setNavMenuOpen } = useContext(HeaderProvider);

  const closeMenuHandler = () => {
    setNavMenuOpen(false);
  };

  return { navMenuOpen, closeMenuHandler };
};

export default useNavMenuItemModel;
