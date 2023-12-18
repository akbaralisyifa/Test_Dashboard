import React from 'react';
import ParagrafHead from '../Atoms/ParagrafHead';
import { IoSearch } from 'react-icons/io5';

export default function ProfileHead() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <ParagrafHead text={'Hello, Jhond .D'} style="text-left" />
        <p className="text-base mt-2 text-slate-600 ">View and control your finances here!</p>
      </div>
      <div>
        <button className="bg-white p-2 rounded-full shadow-md">
          <IoSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
