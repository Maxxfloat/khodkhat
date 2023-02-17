import NavMenuItemProps from '@/types/NavMenuItemProps';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircle, BsPencil } from 'react-icons/bs';

const navMenuModel = () => {
  const navItemData: NavMenuItemProps[] = [
    {
      Icon: AiFillHome,
      link: '/',
      title: 'home'
    },
    {
      Icon: BsPencil,
      link: '/writer',
      title: 'writer'
    },
    {
      Icon: BsInfoCircle,
      link: '/about',
      title: 'about us'
    }
  ];
  return {
    navItemData
  };
};

export default navMenuModel;
