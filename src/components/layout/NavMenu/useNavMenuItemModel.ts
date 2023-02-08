import { useContext } from 'react';
import HeaderProvider from '../Header/HeaderProvider';

const useNavMenuItemModel = () => {
  const { setNavMenuOpen } = useContext(HeaderProvider);

  const closeMenuHandler = () => {
    setNavMenuOpen(false);
  };

  return { closeMenuHandler };
};

export default useNavMenuItemModel;
