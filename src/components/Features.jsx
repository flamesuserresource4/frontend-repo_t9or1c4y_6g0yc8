export default function Features() {
  return (
    <section className="bg-black" id="library">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Your Entire Digital World. One Library.</h3>
            <p className="mt-4 text-white/80">Stop searching across different apps. Your movie rentals, game purchases, and software all live together in one beautiful, secure library.</p>
          </div>
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4">
            <div className="rounded-lg bg-black/60 p-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>NovaPlay Library</span>
                <span>Desktop • Synced</span>
              </div>
              <div className="mt-3 divide-y divide-white/10">
                {[{type:'Movie',title:'Dune: Part Two',meta:'4K • Purchased'}, {type:'Game',title:'Elden Ring',meta:'Installed'}, {type:'Software',title:'Blender',meta:'Update available'}].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div>
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <p className="text-xs text-white/60">{item.type} • {item.meta}</p>
                    </div>
                    <button className="text-xs rounded bg-orange-600 px-3 py-1 text-white hover:bg-orange-500">Open</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Pay How You Want. Not How You're Told.</h3>
            <p className="mt-4 text-white/80">Tired of paying for subscriptions you don't use? With our app, you only pay for what you want. Rent a movie in 720p for just ₹20, or buy it forever in 4K. The choice is yours.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">7-Day Rental</p>
              <p className="mt-1 text-2xl font-extrabold text-orange-500">₹20</p>
              <p className="mt-2 text-xs text-white/70">720p • Watch offline • Cancel anytime</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Lifetime Purchase</p>
              <p className="mt-1 text-2xl font-extrabold text-orange-500">₹400</p>
              <p className="mt-2 text-xs text-white/70">4K • HDR • Own forever</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">All Payments. Zero Hassle.</h3>
            <p className="mt-4 text-white/80">Pay in seconds. We support all major methods, from UPI and Credit Cards to Crypto Wallets. And as an official partner, every download is 100% secure.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {['UPI','Visa','Mastercard','Crypto Accepted','100% Secure Partner'].map((label) => (
              <div key={label} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/90">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
