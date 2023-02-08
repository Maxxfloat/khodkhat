import { createContext, Dispatch, SetStateAction } from 'react';

const HeaderContext = createContext(
  {} as { navMenuOpen: boolean; setNavMenuOpen: Dispatch<SetStateAction<boolean>> }
);

export default HeaderContext;
