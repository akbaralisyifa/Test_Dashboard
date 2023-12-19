import { BiDotsVerticalRounded } from 'react-icons/bi';

export default function TabelTransaction({ dataTransaction }) {
  const priceIDR = (price) => {
    const formattedPrice = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formattedPrice.replace(/\.00$/, '');
  };
  return (
    <table className="w-full">
      {dataTransaction.map((item, index) => (
        <tr key={index} className="flex justify-between py-3 border-b-2">
          <div className="flex items-center gap-3">
            <td>
              <img src={item.avatar} alt={item.name} className="w-12 h-12" />
            </td>
            <td>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-slate-500 font-semibold text-sm">{item.tanggal}</p>
            </td>
          </div>
          <div className="flex items-center gap-7">
            <p className="font-semibold text-base">-{priceIDR(item.price)}</p>
            <BiDotsVerticalRounded className="text-xl cursor-pointer" />
          </div>
        </tr>
      ))}
    </table>
  );
}
