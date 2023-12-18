import { RiHome6Line } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { WiTime9 } from 'react-icons/wi';
import { GoPeople } from 'react-icons/go';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import SidebarTop from './Organism/SidebarTop';
import SidebarLogout from './Organism/SidebarLogout';
import SidebarLink from './Organism/SidebarLink';

const initialLink = [
  {
    icon: <RiHome6Line className="w-6 h-6" />,
  },
  {
    icon: <IoNotificationsOutline className="w-6 h-6" />,
  },
  {
    icon: <WiTime9 className="w-6 h-6" />,
  },
  {
    icon: <GoPeople className="w-6 h-6" />,
  },
  {
    icon: <LiaCreditCardSolid className="w-6 h-6" />,
  },
  {
    icon: <IoSettingsOutline className="w-6 h-6" />,
  },
];

export default function Sidebar() {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index) => {
    isActive === index ? setIsActive(index) : setIsActive(index);
  };

  return (
    <div className="w-24 min-h-screen shadow-md flex flex-col items-center pt-7 pb-20 justify-between fixed z-10 bg-white">
      <SidebarTop />
      <SidebarLink initialLink={initialLink} isActive={isActive} handleClick={handleClick} />
      <SidebarLogout />
    </div>
  );
}
