import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import img from '../../assets/profile.png';

export default function SidebarLogout() {
  return (
    <div className="flex flex-col items-center relative">
      <img src={img} alt="" className="w-10 h-10 rounded-full bg-indigo-200 pt-1 absolute -top-7" />
      <button className=" bg-indigo-50 rounded-full p-1">
        <MdOutlineLogout className="w-7 h-7 pt-2" />
      </button>
    </div>
  );
}
