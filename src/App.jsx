import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Background from './components/Background'

function App() {
  return (
    <div className="min-h-screen bg-black text-pink-50">
      {/* Dynamic atmospheric background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Hero with Spline 3D cover */}
      <Hero />

      {/* Content sections */}
      <main className="relative">
        <Sections />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-pink-500/20 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 py-10 text-pink-100/70 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p>© {new Date().getFullYear()} Sakura Black Pink — All rights reserved.</p>
          <div className="text-sm">Built with motion, 3D and love.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
