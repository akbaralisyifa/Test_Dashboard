import React from 'react';
import HeaderP from '../Atoms/HeaderP';
import { IoIosArrowForward, IoMdAdd } from 'react-icons/io';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Checkbox, Textarea } from '@mantine/core';
import profile from '../../assets/profile.png';
import { AVATAR1 } from '../../assets/avatars';
import { LuSmile } from 'react-icons/lu';

export default function CardListItem({ isDataCheckbox }) {
  return (
    <div className="flex">
      <div className="w-1/2 border-r-2 bg-white shadow-md mt-10 rounded-l-3xl p-5">
        <HeaderP>List Items to Buy</HeaderP>
        <div className="flex items-center gap-5 mt-3">
          <div>
            <h1 className="font-semibold text-4xl ">02:00</h1>
            <p className="text-slate-500 font-semibold text-sm mt-1">Sat, August 12</p>
          </div>
          <div>
            <IoIosArrowForward className="text-slate-500 text-2xl" />
          </div>
          <div>
            <h1 className="font-semibold text-4xl ">05:00</h1>
            <p className="text-slate-500 font-semibold text-sm mt-1">Sat, September 12</p>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <p className="font-semibold text-base text-black">
            <span className="text-slate-500">0/3 </span>Shoping List
          </p>
          <button className="flex items-center gap-2 font-semibold text-base text-slate-900 hover:text-slate-600 transition duration-300">
            <IoMdAdd />
            Add an item
          </button>
        </div>

        <div className="mt-5 flex gap-5 flex-wrap">
          {isDataCheckbox.map((item) => (
            <div key={item.id} className="flex  items-center justify-between w-[48%] bg-slate-50 p-5 rounded-xl shadow-md">
              <div className="flex items-center gap-2">
                <Checkbox color="indigo" id={item.name} value={item.value} name={item.name} className="w-4 h-4 cursor-pointer" onChange={() => {}} />
                <label className="text-base font-semibold cursor-pointer pt-1" htmlFor={item.name}>
                  {item.label}
                </label>
              </div>
              <div>
                <BiDotsVerticalRounded className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 border-r-2 bg-white shadow-md mt-10 rounded-r-3xl p-5">
        <HeaderP>Esther Horward</HeaderP>
        <div className="mt-4">
          <div className="flex justify-end gap-3 items-center">
            <p className="bg-indigo-500 shadow-sm p-2 font-semibold text-white rounded-tl-xl rounded-bl-xl rounded-tr-xl">Are you ready ?</p>
            <img src={profile} alt="" className="w-10 h-10 bg-indigo-300 pt-1 rounded-full" />
          </div>
          <div className="flex justify-start gap-3">
            <img src={AVATAR1} alt="" className="w-10 h-10" />
            <p className="bg-slate-200 font-semibold shadow-sm p-2 rounded-tl-xl rounded-br-xl rounded-tr-xl">I have prepared everything</p>
          </div>
        </div>
        <div className="mt-10">
          <Textarea placeholder="Type your message" withAsterisk variant="unstyled" className="border-t border-l border-r px-3 rounded-tl-xl rounded-tr-xl bg-slate-50 pt-2" />
          <div className="w-full flex justify-between items-center bg-slate-50 py-4 px-2 border-l border-r border-b rounded-bl-xl rounded-br-xl">
            <div>
              <LuSmile className="text-2xl cursor-pointer" />
            </div>
            <button className="bg-indigo-500 font-light text-white px-3 py-1 rounded-md">Send Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
