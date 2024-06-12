import { FaBarcode } from 'react-icons/fa';
import Image from 'next/image';

export default function ProductListItem({ item }) {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 shadow-md border rounded-lg hover:bg-gray-100">
        <div className="flex gap-1">
          <Image
            width={40}
            height={40}
            alt="Coca cola"
            className="rounded-full"
            src={item.img}
          />
          <div>
            <span className="text-blue-900 font-bold">{item.name}</span>
            <div className="flex gap-2">
              <FaBarcode />
              <small className="text-gray-700 block">{item.barcode}</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <span className="text-sm font-bold text-gray-700">
            {item.quantity}
          </span>
          <div className="flex justify-center gap-[2px]">
            <small className="text-red-700 font-bold">{item.buyPrice}</small>
            <small>/</small>
            <small className="text-blue-700 font-bold">{item.sellPrice}</small>
          </div>
        </div>
      </div>
    </>
  );
}
