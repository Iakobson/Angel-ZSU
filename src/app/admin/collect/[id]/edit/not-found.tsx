// @/app/admin/collect/[id]/edit/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Could not find the requested fund collect.</p>
      <Link
        href="/"
      >
        Go Back
      </Link>
    </main>
  );
}