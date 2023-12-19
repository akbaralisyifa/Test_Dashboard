import ProfileHead from './Organism/ProfileHead';
import { Chart } from 'chart.js';
import { useEffect, useRef, useState } from 'react';
import CardStatistic from './Organism/CardStatistic';
import { useSetState } from '@mantine/hooks';
import CardListItem from './Organism/CardListItem';
import CardAnalistic from './Organism/CardAnalistic';

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
      <CardAnalistic isTab={isTab} initalTab={initalTab} handleTab={handleTab} />
    </div>
  );
}
