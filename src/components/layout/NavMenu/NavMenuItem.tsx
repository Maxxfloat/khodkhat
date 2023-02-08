import Link from 'next/link';
import NavMenuItemProps from '@/types/NavMenuItemProps';
import useNavMenuItemModel from './useNavMenuItemModel';

function NavMenuItem({ Icon, link, title }: NavMenuItemProps) {
  const { closeMenuHandler } = useNavMenuItemModel();
  return (
    <Link
      href={link}
      className="flex items-center gap-3 p-3 bg-white shadow rounded-xl"
      onClick={closeMenuHandler}>
      <Icon className="text-2xl" />
      <span>{title}</span>
    </Link>
  );
}

export default NavMenuItem;
