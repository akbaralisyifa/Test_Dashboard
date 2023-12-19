import React from 'react';

export default function CardTimes({ time, date }) {
  return (
    <div>
      <h1 className="font-semibold text-4xl ">{time}</h1>
      <p className="text-slate-500 font-semibold text-sm mt-1">{date}</p>
    </div>
  );
}
