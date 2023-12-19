import React from 'react';
import HeaderP from '../Atoms/HeaderP';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TabTransaction from '../Molecules/TabTransaction';

export default function CardAnalistic(props) {
  const { isTab, initalTab, handleTab } = props;
  return (
    <div className="flex gap-8 my-8 ">
      <div className="w-3/5 rounded-xl p-5 bg-white shadow-md h-[395px] relative overflow-hidden">
        <div className="flex justify-between border-b-2 pb-5 items-center">
          <HeaderP>Last Transactions</HeaderP>
          <div>
            <TabTransaction isTab={isTab} initalTab={initalTab} handleTab={handleTab} />
          </div>
        </div>
      </div>
      <div className="w-2/5 rounded-xl p-5 bg-white shadow-md">
        <div className="flex justify-between items-center">
          <HeaderP>Analytics</HeaderP>
          <BiDotsVerticalRounded className="text-xl" />
        </div>
      </div>
    </div>
  );
}
