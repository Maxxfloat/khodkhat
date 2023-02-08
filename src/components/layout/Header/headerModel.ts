import { useState } from 'react';

const useHeaderModel = () => {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  // const providerValue = { navMenuOpen, setNavMenuOpen };

  return {
    navState: {
      navMenuOpen,
      setNavMenuOpen
    }
  };
};

export default useHeaderModel;
