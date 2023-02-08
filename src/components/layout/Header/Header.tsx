import useHeaderModel from './headerModel';
import AccountPreview from './AccountPreview/AccountPreview';
import BrandLogo from './BrandLogo';
import ItemsContainer from './ItemsContainer';
import NavMenuToggle from './NavMenuToggle/NavMenuToggle';
import NavMenu from '../NavMenu/NavMenu';
import HeaderContext from './HeaderProvider';

function Header() {
  const { navMenuOpen, providerValue } = useHeaderModel();
  return (
    <HeaderContext.Provider value={providerValue}>
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
        className={`flex-col w-64 mt-5 text-xl capitalize transition-transform space-y-7
                    ${navMenuOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'}`}>
        <NavMenu />
      </div>
    </HeaderContext.Provider>
  );
}

export default Header;
