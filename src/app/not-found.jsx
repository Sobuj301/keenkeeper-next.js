import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg text-gray-600">Page Not Found</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}