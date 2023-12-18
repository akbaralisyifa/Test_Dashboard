import React from 'react';

export default function SidebarLink(props) {
  const { initialLink, isActive, handleClick } = props;

  return (
    <div className="bg-indigo-50 p-2 rounded-full flex flex-col gap-3">
      {initialLink.map((link, index) => (
        <button onClick={() => handleClick(index)} key={index} className={`rounded-full p-2 ${isActive === index ? 'bg-indigo-500 text-white' : ''} `}>
          {link.icon}
        </button>
      ))}
    </div>
  );
}
