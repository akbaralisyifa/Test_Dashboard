import { Tabs } from '@mantine/core';
import { AVATAR1, AVATAR2, AVATAR3, AVATAR4, AVATAR5 } from '../../assets/avatars';
import TabelTransaction from '../Molecules/TabelTransaction';
import { useState } from 'react';

const dataTransaction = [
  {
    name: 'Bessie Cooper',
    tanggal: '02 July, 2023',
    avatar: AVATAR1,
    price: 30000,
  },
  {
    name: 'Guy Howkinds',
    tanggal: '02 July, 2023',
    avatar: AVATAR2,
    price: 20000,
  },
  {
    name: 'Floyd Miles',
    tanggal: '02 July, 2023',
    avatar: AVATAR3,
    price: 10000,
  },
  {
    name: 'Jhonny Depp',
    tanggal: '02 July, 2023',
    avatar: AVATAR4,
    price: 50000,
  },
  {
    name: 'Jimmy Cooper',
    tanggal: '02 July, 2023',
    avatar: AVATAR5,
    price: 30000,
  },
];

export default function TabTransaction({ isTab, initalTab, handleTab }) {
  const [isDataTransaction, setIsDataTransaction] = useState(dataTransaction);
  return (
    <Tabs color="indigo" defaultValue={isTab}>
      <Tabs.List>
        {initalTab.map((item, index) => (
          <Tabs.Tab key={index} value={isTab === '' ? isTab : item} onClick={() => handleTab(item)}>
            {item}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      <div className="">
        <div className="absolute w-[750px] overflow-hidden left-4 top-20">
          <Tabs.Panel value="Newest">
            <TabelTransaction dataTransaction={isDataTransaction} />
          </Tabs.Panel>

          <Tabs.Panel value="Oldest">
            {/* <TabelTransaction dataTransaction={dataTransaction} /> */}
            <p>Data Null</p>
          </Tabs.Panel>
        </div>
      </div>
    </Tabs>
  );
}
