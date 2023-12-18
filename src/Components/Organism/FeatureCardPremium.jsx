import { CROWN } from '../../assets/avatars';

export default function FeatureCardPremium() {
  return (
    <div className="w-full border-2 p-3 py-3 rounded-3xl mt-5">
      <h1 className="text-center text-lg font-semibold ">Go to Premium</h1>
      <img src={CROWN} alt="mahkota" className="w-20" />
      <div className="my-2">
        <h2 className="font-semibold text-xl ">Need more feature ?</h2>
        <p className="text-base w-4/5  font-semibold text-slate-500">Upgrade your account to premium to get more features.</p>
      </div>
      <button className="w-full rounded-xl py-4 text-center font-light text-white bg-indigo-500">Get Now</button>
    </div>
  );
}
