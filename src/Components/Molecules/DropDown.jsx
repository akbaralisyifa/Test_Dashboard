import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropDown() {
  const DataSelect = ['Bulanan', 'Tahunan'];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-indigo-200 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          Filter
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-slate-800 " aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0  w-[88px] shadow-md rounded-md mt-2">
          {DataSelect.map((item, index) => (
            <Menu.Item key={index}>
              <div className="cursor-pointer text-center hover:bg-indigo-500 font-semibold hover:text-white rounded-md p-1">{item}</div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
