// src/components/Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const checarTamanhoTela = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', checarTamanhoTela)
    return () => window.removeEventListener('resize', checarTamanhoTela)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="absolute top-0 w-full flex justify-between items-center py-6 px-8 md:px-16 z-50">
      
      <div className="text-purple-400 font-black text-xl tracking-wider drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
        RODRIGO_SOUZA
      </div>
      
      <div className="hidden md:flex gap-8 text-xs text-gray-500 font-mono tracking-widest uppercase">
        <a href="#status" className="hover:text-cyan-400 transition-colors cursor-pointer">STATUS</a>
        <a href="#melhorias" className="hover:text-cyan-400 transition-colors cursor-pointer">MELHORIAS</a>
        <a href="#missoes" className="hover:text-cyan-400 transition-colors cursor-pointer">MISSÕES</a>
        <a href="#terminal" className="hover:text-cyan-400 transition-colors cursor-pointer">TERMINAL</a>
      </div>

      <button className="md:hidden text-cyan-400 text-2xl focus:outline-none z-50" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-purple-500/30 flex flex-col items-center py-8 gap-6 md:hidden">
          <a href="#status" onClick={toggleMenu} className="text-gray-400 hover:text-cyan-400 text-sm tracking-widest cursor-pointer">STATUS</a>
          <a href="#melhorias" onClick={toggleMenu} className="text-gray-400 hover:text-cyan-400 text-sm tracking-widest cursor-pointer">MELHORIAS</a>
          <a href="#missoes" onClick={toggleMenu} className="text-gray-400 hover:text-cyan-400 text-sm tracking-widest cursor-pointer">MISSÕES</a>
          <a href="#terminal" onClick={toggleMenu} className="text-gray-400 hover:text-cyan-400 text-sm tracking-widest cursor-pointer">TERMINAL</a>
        </div>
      )}

    </nav>
  )
}