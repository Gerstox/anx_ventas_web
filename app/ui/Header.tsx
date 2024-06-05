import Link from 'next/link';

export default function Header() {
  return (
    <div className='bg-blue-500 border-b-4 border-orange-400'>
      <Link className="" href="/">
        <div className="text-3xl text-blue-50 text-center font-bold p-4">ANX</div>
      </Link>
    </div>
  );
}
