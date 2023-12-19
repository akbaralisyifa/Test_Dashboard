import ProfileHead from './Organism/ProfileHead';
import { useState } from 'react';
import CardStatistic from './Organism/CardStatistic';
import { useSetState } from '@mantine/hooks';
import CardListItem from './Organism/CardListItem';
import CardAnalistic from './Organism/CardAnalistic';

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
  const [isDataCheckbox, setIsDatacheckbox] = useState(dataCheckbox);
  const initalTab = ['Newest', 'Oldest'];
  const [isTab, setIsTab] = useSetState('Newest');

  const handleTab = (link) => {
    setIsTab(link);
  };

  return (
    <div className="w-[71%] min-h-screen bg-indigo-50 px-10 pt-7 bg-opacity-50 ml-20">
      <ProfileHead />
      <CardStatistic />
      <CardListItem isDataCheckbox={isDataCheckbox} />
      <CardAnalistic isTab={isTab} initalTab={initalTab} handleTab={handleTab} />
    </div>
  );
}
