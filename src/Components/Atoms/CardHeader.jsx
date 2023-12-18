import React from 'react';
import DropDown from '../Molecules/DropDown';
import HeaderP from './HeaderP';

export default function CardHeader() {
  return (
    <div className="flex justify-between">
      <HeaderP>Balance Statistics</HeaderP>
      <DropDown />
    </div>
  );
}
