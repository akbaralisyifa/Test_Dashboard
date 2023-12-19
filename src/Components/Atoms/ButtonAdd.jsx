import { IoMdAdd } from 'react-icons/io';

export default function ButtonAdd() {
  return (
    <button className="flex items-center gap-2 font-semibold text-base text-slate-900 hover:text-slate-600 transition duration-300">
      <IoMdAdd />
      Add an item
    </button>
  );
}
