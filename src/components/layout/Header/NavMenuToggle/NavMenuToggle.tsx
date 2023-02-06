import type { Dispatch, SetStateAction } from 'react';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import navMenuToggleModel from './navMeneToggleModel';

function NavMenuToggle({
  navMenuOpen,
  setNavMenuOpen
}: {
  navMenuOpen: boolean;
  setNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { toggleBtnHandler } = navMenuToggleModel(setNavMenuOpen);

  return (
    <button type="button" className="text-3xl md:text-4xl" onClick={toggleBtnHandler}>
      {navMenuOpen ? <GrClose /> : <HiMenu />}
    </button>
  );
}

export default NavMenuToggle;
