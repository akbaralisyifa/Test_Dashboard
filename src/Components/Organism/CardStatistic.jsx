import CardHeader from '../Atoms/CardHeader';
import CardImage from '../Atoms/CardImage';
import BarChart from '../Molecules/BarChart';
import CardTotal from '../Molecules/CardTotal';

export default function CardStatistic() {
  return (
    <div className=" flex gap-5 justify-between mt-8">
      <div className="bg-white shadow-md rounded-3xl w-3/5 p-5">
        <CardHeader />

        <div className="flex justify-between mt-5">
          <CardTotal />
          <BarChart />
        </div>
      </div>

      <CardImage />
    </div>
  );
}
