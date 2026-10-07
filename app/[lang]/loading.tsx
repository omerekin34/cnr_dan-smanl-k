export default function Loading() {
  return (
    <div className="min-h-svh bg-navy-950 px-4 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-3 w-28 animate-pulse rounded-full bg-white/10" />
        <div className="mt-6 h-12 w-full max-w-xl animate-pulse rounded-2xl bg-white/10" />
        <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
