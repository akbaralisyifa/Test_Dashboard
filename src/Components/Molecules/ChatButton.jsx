import React from 'react';
import { LuSmile } from 'react-icons/lu';

export default function ChatButton() {
  return (
    <div className="w-full flex justify-between items-center bg-slate-50 py-4 px-2 border-l border-r border-b rounded-bl-xl rounded-br-xl">
      <div>
        <LuSmile className="text-2xl cursor-pointer" />
      </div>
      <button className="bg-indigo-500 font-light text-white px-3 py-1 rounded-md">Send Now</button>
    </div>
  );
}
