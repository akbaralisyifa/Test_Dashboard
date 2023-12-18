import ProfileHead from './Organism/ProfileHead';
import { Chart } from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import CardStatistic from './Organism/CardStatistic';
import HeaderP from './Atoms/HeaderP';
import { useSetState } from '@mantine/hooks';
import CardListItem from './Organism/CardListItem';
import TabTransaction from './Organism/TabTransaction';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const data = [
  { bulan: 'Oct', count: 10 },
  { bulan: 'Nov', count: 20 },
  { bulan: 'Des', count: 15 },
  { bulan: 'Jan', count: 25 },
  { bulan: 'Feb', count: 22 },
];

const dataCheckbox = [
  {
    id: 1,
    label: 'Macbook',
    name: 'macbook',
    value: 'macbook',
  },
  {
    id: 2,
    label: 'Motorcycle',
    name: 'motorcycle',
    value: 'motorcycle',
  },
  {
    id: 3,
    label: 'Bycycle',
    name: 'bycycle',
    value: 'bycycle',
  },
  {
    id: 4,
    label: 'Ipon 14 pro max',
    name: 'ipon',
    value: 'ipon',
  },
];

export default function Profile() {
  const CartRef = useRef(null);
  const [isDataCheckbox, setIsDatacheckbox] = useState(dataCheckbox);
  const initalTab = ['Newest', 'Oldest'];
  const [isTab, setIsTab] = useSetState('Newest');

  const handleTab = (link) => {
    setIsTab(link);
  };

  useEffect(() => {
    if (CartRef.current !== null) {
      new Chart(CartRef.current, {
        type: 'bar',
        data: {
          labels: data.map((row) => row.bulan),
          datasets: [
            {
              label: 'Acquisitions by Mounth',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div className="w-[71%] min-h-screen bg-indigo-50 px-10 pt-7 bg-opacity-50 ml-20">
      <ProfileHead />
      <CardStatistic />
      <CardListItem isDataCheckbox={isDataCheckbox} />

      <div className="flex gap-8 my-8 ">
        <div className="w-3/5 rounded-xl p-5 bg-white shadow-md h-[395px] relative overflow-hidden">
          <div className="flex justify-between border-b-2 pb-5 items-center">
            <HeaderP>Last Transactions</HeaderP>
            <div>
              <TabTransaction isTab={isTab} initalTab={initalTab} handleTab={handleTab} />
            </div>
          </div>
        </div>
        <div className="w-2/5 rounded-xl p-5 bg-white shadow-md">
          <div className="flex justify-between items-center">
            <HeaderP>Analytics</HeaderP>
            <BiDotsVerticalRounded className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
