import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#diensten', label: 'Diensten' },
    { href: '#proces', label: 'Proces' },
    { href: '#cases', label: 'Cases' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-md shadow-lg shadow-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <motion.div initial={{ rotate: -10, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }} className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white">
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <div className="leading-tight">
                <span className="block text-sm text-gray-600">WebForge</span>
                <span className="block text-lg font-semibold tracking-tight">Studio</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#contact" className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition-colors">
                Plan een gesprek
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t border-white/60">
                <div className="space-y-2 px-4 py-3">
                  {links.map((l) => (
                    <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white">
                      {l.label}
                    </a>
                  ))}
                  <a href="#contact" className="block rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white">Plan een gesprek</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
