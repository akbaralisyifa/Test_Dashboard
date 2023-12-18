import React from 'react';

export default function ParagrafHead({ text, style }) {
  return (
    <>
      <p className={`${style ? style : ' text-center'} font-bold text-2xl`}>{text}</p>
    </>
  );
}
