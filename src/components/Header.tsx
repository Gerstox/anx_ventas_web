import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-br-[100px]">
      <Link className="" href="/">
        <div className="text-3xl text-blue-50 text-center font-bold p-4">
          ANX
        </div>
      </Link>
    </div>
  );
}
