import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-pink-500/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl text-pink-200">
          <span className="text-white">Sakura</span><span className="text-pink-400">.black</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-pink-100/80">
          <a href="#about" className="hover:text-pink-200 transition-colors">About</a>
          <a href="#work" className="hover:text-pink-200 transition-colors">Work</a>
          <a href="#contact" className="hover:text-pink-200 transition-colors">Contact</a>
        </div>

        <button className="md:hidden text-pink-100">
          <Menu />
        </button>
      </div>
    </motion.nav>
  )
}
