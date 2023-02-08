import NavMenuItemProps from '@/types/NavMenuItemProps';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircle, BsVectorPen } from 'react-icons/bs';

const navMenuModel = () => {
  const navItemData: NavMenuItemProps[] = [
    {
      Icon: AiFillHome,
      link: '/',
      title: 'home'
    },
    {
      Icon: BsInfoCircle,
      link: '/about',
      title: 'about us'
    },
    {
      Icon: BsVectorPen,
      link: '/write',
      title: 'research builder'
    }
  ];
  return {
    navItemData
  };
};

export default navMenuModel;
