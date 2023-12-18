import iconMoney from '../../assets/icon-money.png';
import CardHeader from '../Atoms/CardHeader';
import CardImage from '../Atoms/CardImage';

export default function CardStatistic() {
  return (
    <div className=" flex gap-5 justify-between mt-8">
      <div className="bg-white shadow-md rounded-3xl w-3/5 p-5">
        <CardHeader />

        <div className="flex justify-between mt-5">
          <div className=" w-1/4">
            <p className="font-semibold text-3xl">$567</p>
            <div className="flex items-center mt-5 border-b-2 pb-4">
              <img src={iconMoney} alt="" className=" mr-5" />
              <p className="font-normal text-base text-slate-700 ">Your Total Balance</p>
            </div>
            <div className="flex justify-between mt-5">
              <p>----</p>
              <p>6%</p>
            </div>
            <div>
              <p className="font-semibold text-base text-slate-700 mt-5">Always see your earnings updates</p>
            </div>
          </div>
          <div className="w-full px-4">
            {/* <canvas ref={CartRef} width={200} height={150}></canvas> */}
            <p>digram</p>
          </div>
        </div>
      </div>

      <CardImage />
    </div>
  );
}
