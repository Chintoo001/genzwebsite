import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
   <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

    <Link href="/" className="flex items-center">
      <Image
        src="/fulllogo.ico.png"
        alt="GenZwebsite"
        width={200}
        height={100}
        priority
        className="h-8 w-auto sm:h-10 md:h-12 object-contain"
      />
    </Link>

    <div className="flex gap-3 text-sm sm:text-base">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/projects" className="hover:text-blue-400">Projects</Link>
      <Link href="/Contact" className="hover:text-blue-400">Contact</Link>
    </div>

  </div>
</nav>

  );
}

