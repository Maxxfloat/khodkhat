import useHeaderModel from './headerModel';
import AccountPreview from './AccountPreview/AccountPreview';
import BrandLogo from './BrandLogo';
import ItemsContainer from './ItemsContainer';
import NavMenuToggle from './NavMenuToggle/NavMenuToggle';
import NavMenu from '../NavMenu/NavMenu';

function Header() {
  const { navMenuOpen, setNavMenuOpen } = useHeaderModel();
  return (
    <>
      <ItemsContainer>
        <NavMenuToggle navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
      </ItemsContainer>
      <div>
        <ItemsContainer>
          <BrandLogo />
        </ItemsContainer>
      </div>
      <ItemsContainer>
        <AccountPreview />
      </ItemsContainer>
      {navMenuOpen && <NavMenu />}
    </>
  );
}

export default Header;
