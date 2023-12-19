import React from 'react';
import DotsAnalistic from '../Atoms/DotsAnalistic';

export default function Progress({ text, style }) {
  return (
    <li className="flex">
      <DotsAnalistic style={style} />
      <p className="text-sm">{text}</p>
    </li>
  );
}
