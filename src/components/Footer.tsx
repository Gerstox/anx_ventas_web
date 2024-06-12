import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-blue-50 py-2 border-b-4 rounded-tl-[50px]">
      <Link className="" href="/">
        <div className="text-center text-xl font-bold px-4">ANX</div>
      </Link>
      <p className="text-center">© 2024 My Corp. All rights reserved.</p>
    </div>
  );
}
