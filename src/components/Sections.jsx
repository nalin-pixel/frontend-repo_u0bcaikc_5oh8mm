import { motion } from 'framer-motion'

export default function Sections() {
  const card = {
    hidden: { opacity: 0, y: 40, rotateX: -6 },
    show: (i) => ({ opacity: 1, y: 0, rotateX: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
  }

  return (
    <>
      {/* About */}
      <section id="about" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Minimal, futuristic, 3D-first.
              </h2>
              <p className="mt-6 text-pink-100/85">
                I design and code interfaces where every interaction feels physical — smooth parallax, depth,
                and subtle glow-dust atmospherics. Motion as a feature, not a garnish.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-3xl border border-pink-500/30 bg-white/5 backdrop-blur-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {['WebGL', 'Spline', 'React', 'Framer', 'Tailwind', 'FastAPI'].map((t, i) => (
                  <motion.div key={t} custom={i} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10 p-4 text-pink-100 text-sm">
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Selected work</h2>
            <p className="mt-4 text-pink-100/85">A few interactive experiments and brand sites.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((n, i) => (
              <motion.a key={n} href="#" custom={i} variants={card} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-pink-500/30 bg-white/5 backdrop-blur-xl p-5">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-fuchsia-600/10" />
                <div className="relative z-10">
                  <div className="h-32 rounded-xl bg-black/50 border border-pink-500/20" />
                  <div className="mt-4 text-white font-semibold">Project {n}</div>
                  <div className="text-pink-100/70 text-sm">Interactive web • 3D • Motion</div>
                </div>
                <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: 'radial-gradient(400px 200px at 50% 0%, rgba(236,72,153,0.25), transparent 60%)'
                }} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">Let’s create something luminous.</h2>
              <p className="mt-6 text-pink-100/85">Open for collaborations, brand sites, and interactive 3D experiences.</p>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              onSubmit={(e) => e.preventDefault()} className="relative rounded-3xl border border-pink-500/30 bg-white/5 backdrop-blur-xl p-8">
              <div className="grid gap-5">
                <input className="rounded-xl bg-black/40 border border-pink-500/30 px-4 py-3 text-pink-50 placeholder-pink-200/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Your name" />
                <input className="rounded-xl bg-black/40 border border-pink-500/30 px-4 py-3 text-pink-50 placeholder-pink-200/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Email" />
                <textarea rows="4" className="rounded-xl bg-black/40 border border-pink-500/30 px-4 py-3 text-pink-50 placeholder-pink-200/40 focus:outline-none focus:ring-2 focus:ring-pink-500/40" placeholder="Tell me about your project" />
                <button className="relative mt-2 inline-flex justify-center rounded-xl border border-pink-500/40 bg-pink-500/20 px-5 py-3 text-pink-100 hover:bg-pink-500/30 transition-all">
                  Send message
                </button>
              </div>
              <div className="absolute -inset-20 pointer-events-none opacity-60" style={{
                background: 'radial-gradient(500px 300px at 90% 90%, rgba(236,72,153,0.18), transparent 60%)'
              }} />
            </motion.form>
          </div>
        </div>
      </section>
    </>
  )
}
