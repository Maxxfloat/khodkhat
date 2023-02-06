import { useState } from 'react';

const useHeaderModel = () => {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);

  return {
    navMenuOpen,
    setNavMenuOpen
  };
};

export default useHeaderModel;
