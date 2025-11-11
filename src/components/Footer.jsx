export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white/80 text-sm space-x-6">
            <a href="#" className="hover:text-white">FAQ</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Payment Policy</a>
          </div>
          <div className="flex md:justify-end items-center gap-3">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10" />
          </div>
        </div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} NovaPlay. All rights reserved.</p>
      </div>
    </footer>
  )
}
