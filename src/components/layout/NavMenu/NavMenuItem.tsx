import Link from 'next/link';
import NavMenuItemProps from '@/types/NavMenuItemProps';
import useNavMenuItemModel from './useNavMenuItemModel';

function NavMenuItem({ Icon, link, title }: NavMenuItemProps) {
  const { navMenuOpen, closeMenuHandler } = useNavMenuItemModel();
  return (
    <Link href={link} className="flex">
      <button
        type="button"
        className="flex items-center gap-3 w-full p-3 bg-white shadow rounded-xl"
        onClick={closeMenuHandler}
        disabled={!navMenuOpen}>
        <Icon className="text-2xl" />
        <span>{title}</span>
      </button>
    </Link>
  );
}

export default NavMenuItem;
