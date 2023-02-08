import NavMenuItem from './NavMenuItem';
import navMenuModel from './navMenuModel';

function NavMenu() {
  const { navItemData } = navMenuModel();
  return (
    <>
      {navItemData.map((item) => (
        <NavMenuItem key={item.title} title={item.title} Icon={item.Icon} link={item.link} />
      ))}
    </>
  );
}

export default NavMenu;
