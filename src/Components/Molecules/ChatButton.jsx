import React from 'react';
import { LuSmile } from 'react-icons/lu';
import { GrAttachment } from 'react-icons/gr';

export default function ChatButton() {
  return (
    <div className="w-full flex justify-between items-center bg-slate-50 py-4 px-2 border-l border-r border-b rounded-bl-xl rounded-br-xl">
      <div className="flex gap-3 items-center">
        <LuSmile className="text-2xl cursor-pointer" />
        <GrAttachment className="text-xl cursor-pointer" />
      </div>
      <button className="bg-indigo-500 font-light text-white px-4 py-1 rounded-md">Send Now</button>
    </div>
  );
}
