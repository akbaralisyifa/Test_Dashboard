import React from 'react';
import HeaderP from '../Atoms/HeaderP';
import { IoIosArrowForward } from 'react-icons/io';
import { Textarea } from '@mantine/core';
import profile from '../../assets/profile.png';
import { AVATAR1 } from '../../assets/avatars';
import { LuSmile } from 'react-icons/lu';
import CardTimes from '../Molecules/CardTimes';
import ListItems from '../Molecules/ListItems';
import ButtonAdd from '../Atoms/ButtonAdd';
import TextList from '../Atoms/TextList';
import ChatProfile from '../Molecules/ChatProfile';
import TextareaChat from '../Atoms/TextareaChat';
import ChatButton from '../Molecules/ChatButton';

export default function CardListItem({ isDataCheckbox }) {
  return (
    <div className="flex">
      <div className="w-1/2 border-r-2 bg-white shadow-md mt-10 rounded-l-3xl p-5">
        <HeaderP>List Items to Buy</HeaderP>
        <div className="flex items-center gap-5 mt-3">
          <CardTimes time={'02:00'} date={'Sat, August 12'} />
          <IoIosArrowForward className="text-slate-500 text-2xl" />
          <CardTimes time={'05:00'} date={'Sat, September 12'} />
        </div>
        <div className="mt-5 flex justify-between items-center">
          <TextList />
          <ButtonAdd />
        </div>

        <div className="mt-5 flex gap-5 flex-wrap">
          {isDataCheckbox.map((item) => (
            <ListItems key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="w-1/2 border-r-2 bg-white shadow-md mt-10 rounded-r-3xl p-5">
        <HeaderP>Esther Horward</HeaderP>
        <div className="mt-4">
          <ChatProfile img={profile} text={'Are you ready ?'} />
          <ChatProfile img={AVATAR1} text={'I have prepared everything'} style={true} />
        </div>
        <div className="mt-10">
          <TextareaChat />
          <ChatButton />
        </div>
      </div>
    </div>
  );
}
