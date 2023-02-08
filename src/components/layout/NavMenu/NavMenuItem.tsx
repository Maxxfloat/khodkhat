import Link from 'next/link';
import NavMenuItemProps from '@/types/NavMenuItemProps';

function NavMenuItem({ Icon, link, title }: NavMenuItemProps) {
  return (
    <Link href={link} className="flex">
      <Icon />
      <span>{title}</span>
    </Link>
  );
}

export default NavMenuItem;
