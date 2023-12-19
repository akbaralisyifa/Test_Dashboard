export default function FeatureLatest(props) {
  const { index, avatar, title, tanggal } = props;
  return (
    <div key={index} className="flex items-center gap-5 py-4 border-b-2">
      <img src={avatar} alt="" className="w-14 h-14 rounded-full bg-indigo-200 p-2" />
      <div>
        <h2 className="font-bold text-base text-slate-700">{title}</h2>
        <p className="text-slate-500 font-semibold text-sm">{tanggal}</p>
      </div>
    </div>
  );
}
