import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays for Sakura Black Pink vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute -inset-24 pointer-events-none opacity-60 mix-blend-screen" style={{
          background:
            'radial-gradient(800px 500px at 20% 20%, rgba(255, 105, 180, 0.25), transparent 60%), radial-gradient(900px 600px at 80% 30%, rgba(219, 39, 119, 0.20), transparent 60%), radial-gradient(600px 500px at 50% 80%, rgba(236, 72, 153, 0.18), transparent 60%)'
        }} />
      </div>

      <div className="relative container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-white/5 px-3 py-1 backdrop-blur-md text-pink-200">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.9)]" />
            <span className="text-xs tracking-wider">Sakura • Black • Pink</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-pink-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              I craft immersive 3D web experiences
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-pink-100/90 max-w-xl">
            Designer-developer blending motion, 3D and code to build bold, futuristic brands and products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="group relative inline-flex items-center gap-2 rounded-xl border border-pink-500/40 bg-pink-500/10 px-5 py-3 text-pink-100 transition-all hover:bg-pink-500/20">
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-pink-600/0 via-pink-500/20 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-md hover:bg-white/15 transition-all">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="hidden md:block"
        >
          <div className="relative aspect-square w-full max-w-[520px] mx-auto">
            <div className="absolute inset-0 rounded-3xl border border-pink-500/30 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_rgba(236,72,153,0.2)]" />
            <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10" />
            <div className="absolute inset-0 rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
