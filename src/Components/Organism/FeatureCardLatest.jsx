import { HOSPITAL, ONLINE_STORE, TICKET } from '../../assets/avatars';
import HeadFeature from '../Atoms/HeadFeature';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdArrowForward } from 'react-icons/md';
import FeatureLatest from '../Molecules/FeatureLatest';

const dataLatest = [
  {
    avatar: ONLINE_STORE,
    title: 'Online Store',
    tanggal: 'May 20, 2023 at 08:00',
  },
  {
    avatar: HOSPITAL,
    title: 'Pay the hospital',
    tanggal: 'May 28, 2023 at 10:00',
  },
  {
    avatar: TICKET,
    title: 'Tickets',
    tanggal: 'May 10, 2023 at 12:00',
  },
];

export default function FeatureCardLatest() {
  return (
    <div className="w-full border-2 p-3 py-3 rounded-3xl mt-5">
      <div className="flex justify-between items-center">
        <HeadFeature>Latest Spending</HeadFeature>
        <BiDotsVerticalRounded className="text-xl" />
      </div>

      {dataLatest.map((item, index) => (
        <FeatureLatest key={index} {...item} />
      ))}

      <div className="mt-5 flex justify-center">
        <button className="text-xl text-indigo-500 hover:text-indigo-700 flex justify-center items-center gap-2 transition duration-200">
          View all <MdArrowForward className="text-2xl " />
        </button>
      </div>
    </div>
  );
}
