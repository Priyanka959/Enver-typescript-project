import React from 'react'

export default function Hero(){
  return (
    <section className="pt-10 pb-24">
      <div className="container-center grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Build Your Awesome Platform</h1>
          <p className="mt-6 text-gray-300 max-w-md">Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
          <div className="mt-8">
            <button className="bg-primary px-5 py-3 rounded-md mr-4">Our Services</button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-96 glass-card rounded-3xl relative overflow-hidden">
            <img src="/src/assets/hero-person.jpg" alt="hero" className="absolute right-0 top-0 h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
