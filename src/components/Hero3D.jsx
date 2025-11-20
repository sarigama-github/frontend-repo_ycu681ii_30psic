import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Glass gradient overlay for readability; don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Your money, beautifully organized
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            A minimalist, glass-morphic dashboard that turns your finances into a clear story.
          </p>
        </div>
      </div>
    </section>
  )
}
