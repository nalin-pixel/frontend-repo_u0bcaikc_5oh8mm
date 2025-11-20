import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

// Sakura Glow Dust + Parallax field
export default function Background() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMouse({ x, y })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const particles = useMemo(() => {
    const arr = []
    const count = 60
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        size: Math.random() * 6 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 12,
        hue: 310 + Math.random() * 40, // pink-magenta range
      })
    }
    return arr
  }, [])

  const parallaxX = (mouse.x - 0.5) * 40
  const parallaxY = (mouse.y - 0.5) * 40

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft radial auroras following cursor */}
      <motion.div
        className="absolute -inset-1 pointer-events-none"
        style={{
          background:
            'radial-gradient(900px 600px at var(--mx) var(--my), rgba(255,105,180,0.14), transparent 60%), radial-gradient(700px 500px at calc(var(--mx) - 200px) calc(var(--my) + 120px), rgba(255,20,147,0.08), transparent 60%), radial-gradient(600px 500px at calc(var(--mx) + 220px) calc(var(--my) - 120px), rgba(147,51,234,0.10), transparent 60%)',
        }}
        animate={{ '--mx': `${mouse.x * 100}%`, '--my': `${mouse.y * 100}%` }}
        transition={{ type: 'spring', stiffness: 60, damping: 20, mass: 1 }}
      />

      {/* Glow dust particles */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: parallaxX, y: parallaxY }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
      >
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full mix-blend-screen"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 ${Math.max(6, p.size * 2)}px rgba(255,182,193,0.9), 0 0 ${Math.max(14, p.size * 3)}px rgba(255,20,147,0.5)`
            }}
            initial={{ opacity: 0.3, scale: 0.6 }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              y: [0, -40 - Math.random() * 60, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              filter: [
                `hue-rotate(0deg)`,
                `hue-rotate(${(Math.random() * 40 - 20).toFixed(1)}deg)`,
                `hue-rotate(0deg)`
              ],
            }}
            transition={{
              repeat: Infinity,
              ease: 'easeInOut',
              duration: p.duration,
              delay: p.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Subtle scanline for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)'
      }} />
    </div>
  )
}
