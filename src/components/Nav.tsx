import React from 'react'

export default function Nav(){
  return (
    <header className="py-6">
      <div className="container-center flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-sm font-bold">E</span>
          </div>
          <span className="font-bold text-lg">Enver</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#" className="text-gray-400">Home</a>
          <a href="#services" className="text-gray-400">Services</a>
          <a href="#portfolio" className="text-gray-400">Our Project</a>
          <a href="#about" className="text-gray-400">About us</a>
        </nav>
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md bg-transparent border border-white/10 text-white text-sm">Contact us</button>
        </div>
      </div>
    </header>
  )
}
