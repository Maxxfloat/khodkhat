import Link from 'next/link';
import NavMenuItemProps from '@/types/NavMenuItemProps';

function NavMenuItem({ Icon, link, title }: NavMenuItemProps) {
  return (
    <Link href={link} className="flex items-center gap-3 p-3 bg-white shadow rounded-xl">
      <Icon className="text-2xl" />
      <span>{title}</span>
    </Link>
  );
}

export default NavMenuItem;
