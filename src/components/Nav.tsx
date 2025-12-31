import React, { useState } from 'react'

export default function Nav(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-6">
      <div className="container-center flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-sm font-bold">E</span>
          </div>
          <span className="font-bold text-lg">Enver</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
          <a href="#services" className="text-gray-400 hover:text-white">Services</a>
          <a href="#portfolio" className="text-gray-400 hover:text-white">Our Project</a>
          <a href="#about" className="text-gray-400 hover:text-white">About us</a>
        </nav>
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md bg-transparent border border-white/10 text-white text-sm">Contact us</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 text-sm pb-6">
          <a href="#" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Our Project</a>
          <a href="#about" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>About us</a>
          <button className="px-4 py-2 rounded-md bg-transparent border border-white/10 text-white text-sm w-full mt-2">Contact us</button>
        </nav>
      )}
    </header>
  )
}
