import { Checkbox } from '@mantine/core';
import React from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';

export default function ListItems(props) {
  const { id, label, name, value } = props;

  return (
    <div key={id} className="flex  items-center justify-between w-[48%] bg-slate-50 p-5 rounded-xl shadow-md">
      <div className="flex items-center gap-2">
        <Checkbox color="indigo" id={name} value={value} name={name} className="w-4 h-4 cursor-pointer" onChange={() => {}} />
        <label className="text-base font-semibold cursor-pointer pt-1" htmlFor={name}>
          {label}
        </label>
      </div>
      <div>
        <BiDotsVerticalRounded className="text-xl" />
      </div>
    </div>
  );
}
