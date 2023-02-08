import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import navMenuToggleModel from './useNavMeneToggleModel';

function NavMenuToggle() {
  const { toggleBtnHandler, navMenuOpen } = navMenuToggleModel();

  return (
    <button type="button" className="p-3 text-3xl md:text-4xl" onClick={toggleBtnHandler}>
      {navMenuOpen ? <GrClose /> : <HiMenu />}
    </button>
  );
}

export default NavMenuToggle;
