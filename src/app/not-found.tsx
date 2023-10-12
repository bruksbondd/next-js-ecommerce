import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='text-center m-5 text-xl'>Page not found.</div>
      <Link href={'/'} className='btn btn-primary max-w-md '>
        Back to Home
      </Link>
    </div>
  );
}
