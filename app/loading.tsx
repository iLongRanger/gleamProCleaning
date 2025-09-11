import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0B2545] text-white">
      {/* Gleam Pro Logo */}
      <Image
        src="/logo-gpc.png" // make sure this is in your /public folder
        alt="Gleam Pro Cleaning"
        width={100}
        height={100}
        priority
        className="animate-pulse"
      />

      {/* Tagline */}
      <p className="mt-4 text-lg font-semibold text-[#C9A227]">
        Shining up your space…
      </p>
    </div>
  );
}
