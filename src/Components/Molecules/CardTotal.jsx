import React from 'react';
import { LINE_DIAGRAM, MONEY } from '../../assets/avatars';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

export default function CardTotal() {
  return (
    <div className=" w-1/3">
      <p className="font-semibold text-4xl">$567</p>
      <div className="flex items-center mt-5 border-b-2 pb-4">
        <img src={MONEY} alt="" className=" mr-5" />
        <p className="font-normal text-xl text-slate-700 ">Your Total Balance</p>
      </div>
      <div className="flex justify-between mt-5">
        <img src={LINE_DIAGRAM} alt="" className="w-28 h-10" />
        <div className="flex gap-2 items-center">
          <FaRegArrowAltCircleUp className="text-lg mt-1" />
          <p className="text-lg">6%</p>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg text-slate-700 mt-5">Always see your earnings updates</p>
      </div>
    </div>
  );
}
