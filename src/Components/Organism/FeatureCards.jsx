import HeadFeature from '../Atoms/HeadFeature';
import FeatureCard from '../Molecules/FeatureCard';
import FeatureVs from '../Molecules/FeatureVs';

const dataCard = [
  {
    title: 'Expenses',
    percentage: '75%',
    amount: '5.653',
  },
  {
    title: 'Income',
    percentage: '40%',
    amount: '2.653',
  },
];

export default function FeatureCards() {
  return (
    <div className="w-full border-2 p-3 py-3 rounded-3xl">
      <HeadFeature>Expenses and Income</HeadFeature>
      <div className="flex justify-between mt-5">
        <FeatureCard title={dataCard[0].title} percentage={dataCard[0].percentage} amount={dataCard[0].amount} />
        <FeatureVs />
        <FeatureCard title={dataCard[1].title} percentage={dataCard[1].percentage} amount={dataCard[1].amount} />
      </div>
      <div className="mt-7">
        <p className="bg-indigo-500 rounded-md w-full text-center text-white py-1">Canvas Persentase</p>
      </div>
    </div>
  );
}
