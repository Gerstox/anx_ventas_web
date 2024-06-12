import { IoCall } from 'react-icons/io5';
import { FaEllipsisV, FaEnvelope } from 'react-icons/fa';

export default function ClientListItem({item}) {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-2 shadow-md border rounded-lg hover:bg-gray-100">
        <div>
          <span className="text-blue-900 font-bold">{item.name}</span>
          <small className="text-gray-600 font-semibold block">
            {item.notes}
          </small>
        </div>
        <div className="flex justify-center gap-4">
          <IoCall className="text-blue-700 hover:text-blue-500" />
          <FaEnvelope className="text-blue-700 hover:text-blue-500" />
          <FaEllipsisV className="text-blue-700 hover:text-blue-500" />
        </div>
      </div>
    </>
  );
}
