import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CarouselRow({ id, title, items = [] }) {
  const containerRef = useRef(null)

  const scrollBy = (offset) => {
    containerRef.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id={id} className="relative py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-semibold text-white">{title}</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollBy(-600)}
              className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/5 text-white hover:bg-white/10"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(600)}
              className="inline-flex h-9 w-9 items-center justify-center rounded bg-white/5 text-white hover:bg-white/10"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ scrollbarWidth: 'none' }}
          >
            {items.map((item, idx) => (
              <a
                key={idx}
                href="#download"
                className="group relative aspect-[2/3] w-36 sm:w-40 md:w-48 flex-shrink-0 overflow-hidden rounded-lg bg-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="truncate text-xs text-white/90">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
