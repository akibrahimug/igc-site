import Link from "next/link";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm tracking-widest uppercase text-white/60">404</p>
      <h1 className="mt-4 text-3xl md:text-5xl font-bold uppercase tracking-wide">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/70">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-white px-6 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
