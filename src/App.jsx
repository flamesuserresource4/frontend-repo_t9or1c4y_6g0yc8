import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CarouselRow from './components/CarouselRow'
import Features from './components/Features'
import Footer from './components/Footer'

const movies = [
  { title: 'Dune: Part Two', image: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg' },
  { title: 'Oppenheimer', image: 'https://images.unsplash.com/photo-1707740210836-48d89e4f4501?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEdW5lJTNBJTIwUGFydCUyMFR3b3xlbnwwfDB8fHwxNzYyODg4ODEwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Barbie', image: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
  { title: 'John Wick 4', image: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
  { title: 'Avatar: The Way of Water', image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
  { title: 'Spider-Man: No Way Home', image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
  { title: 'The Batman', image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' },
]

const games = [
  { title: 'Elden Ring', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg' },
  { title: 'Cyberpunk 2077', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5jmi.jpg' },
  { title: 'Baldur\'s Gate 3', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6aua.jpg' },
  { title: 'Starfield', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co6n4l.jpg' },
  { title: 'God of War', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1t2f.jpg' },
  { title: 'Hades II', image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co8n9f.jpg' },
]

const shows = [
  { title: 'Succession', image: 'https://images.unsplash.com/photo-1677722016462-c1c367f02a40?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2QlMjBvZiUyMFdhcnxlbnwwfDB8fHwxNzYyODg4ODExfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'The Last of Us', image: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
  { title: 'House of the Dragon', image: 'https://image.tmdb.org/t/p/w500/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg' },
  { title: 'Severance', image: 'https://image.tmdb.org/t/p/w500/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg' },
  { title: 'The Bear', image: 'https://images.unsplash.com/photo-1633201876516-c76019627752?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdWNjZXNzaW9ufGVufDB8MHx8fDE3NjI4ODg4MTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

const software = [
  { title: 'Adobe Photoshop', image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png' },
  { title: 'Blender', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' },
  { title: 'VLC Media Player', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZG9iZSUyMFBob3Rvc2hvcHxlbnwwfDB8fHwxNzYyODg4ODEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { title: 'Visual Studio Code', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
  { title: 'Figma', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
]

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />

        <div className="relative -mt-10 space-y-4">
          <CarouselRow id="movies" title="New Movie Rentals" items={movies} />
          <CarouselRow id="games" title="Top PC Games" items={games} />
          <CarouselRow id="tv" title="Binge-worthy TV Shows" items={shows} />
          <CarouselRow id="software" title="Essential Software" items={software} />
        </div>

        <Features />

        <section id="download" className="bg-gradient-to-b from-black to-black py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to build your library?</h3>
            <a href="#" className="mt-6 inline-flex items-center rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black">
              Download the App
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
