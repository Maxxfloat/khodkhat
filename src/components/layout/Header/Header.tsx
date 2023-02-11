import useHeaderModel from './headerModel';
import AccountPreview from './AccountPreview/AccountPreview';
import BrandLogo from './BrandLogo';
import ItemsContainer from './ItemsContainer';
import NavMenuToggle from './NavMenuToggle/NavMenuToggle';
import NavMenu from '../NavMenu/NavMenu';
import HeaderContext from './HeaderProvider';

function Header() {
  const { navState } = useHeaderModel();
  return (
    <HeaderContext.Provider value={navState}>
      <div className="flex justify-between h-12 md:h-14">
        <ItemsContainer>
          <NavMenuToggle />
        </ItemsContainer>
        <div>
          <ItemsContainer>
            <BrandLogo />
          </ItemsContainer>
        </div>
        <ItemsContainer>
          <AccountPreview />
        </ItemsContainer>
      </div>
      <div
        className={`flex-col w-64 mt-5 text-xl capitalize transition-transform space-y-7 absolute
                    ${navState.navMenuOpen ? 'translate-x-0' : '-translate-x-full '}`}>
        <NavMenu />
      </div>
    </HeaderContext.Provider>
  );
}

export default Header;
