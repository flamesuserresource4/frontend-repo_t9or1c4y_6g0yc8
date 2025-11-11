import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-semibold tracking-tight text-white">
              NovaPlay
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#movies" className="hover:text-white transition">Movies</a>
              <a href="#tv" className="hover:text-white transition">TV Shows</a>
              <a href="#games" className="hover:text-white transition">Games</a>
              <a href="#software" className="hover:text-white transition">Software</a>
              <a href="#library" className="hover:text-white transition">My Library</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black">
              Download App
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded bg-white/5 text-white hover:bg-white/10">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
