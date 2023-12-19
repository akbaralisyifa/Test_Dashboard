import React from 'react';

export default function ChatProfile({ img, text, style }) {
  const styles = 'bg-slate-200 order-2 text-slate-800 rounded-br-xl';

  return (
    <div className={` ${style ? 'justify-start mt-2' : 'justify-end'} flex gap-3 items-center`}>
      <p className={` ${style ? styles : 'bg-indigo-500 text-white rounded-bl-xl'} shadow-sm p-2 font-semibold  rounded-tl-xl rounded-tr-xl`}>{text}</p>
      <img src={img} alt="" className={` ${style ? 'pt-0' : ' pt-1 rounded-full bg-indigo-300'} w-10 h-10 `} />
    </div>
  );
}
