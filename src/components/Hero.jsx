import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black pointer-events-none" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Movies. Games. Software. Finally Together.
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/80">
          Rent or buy the latest releases, play top PC games, and get official software. All from one app. All in one library.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#download" className="rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black">
            Download Now
          </a>
        </div>
      </div>
    </section>
  )
}
