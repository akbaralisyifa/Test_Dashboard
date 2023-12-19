import React from 'react';
import HeaderP from '../Atoms/HeaderP';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import TabTransaction from '../Molecules/TabTransaction';
import { RingProgress } from '@mantine/core';
import Progress from '../Molecules/Progress';

const data = [
  { value: 15, color: '#4f46e5' },
  { value: 20, color: '#f97316' },
  { value: 20, color: '#ef4444' },
  { value: 5, color: '#737373' },
  { value: 39, color: '#fff' },
];

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
        <div className="flex justify-center relative">
          <RingProgress size={250} thickness={12} roundCaps sections={data} variant="unstyled" className="bg-transparent -rotate-[110deg] text-white" />
          <div className="absolute top-[100px] text-center">
            <p className="text-5xl">90%</p>
            <p className="text-2xl text-slate-500">Done</p>
          </div>
        </div>
        <div>
          <ul className="flex justify-evenly">
            <Progress text={'Done'} style="text-indigo-500" />
            <Progress text={'Pending'} style="text-orange-500" />
            <Progress text={'To do'} style="text-red-500" />
          </ul>
        </div>
      </div>
    </div>
  );
}
