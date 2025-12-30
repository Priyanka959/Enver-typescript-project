import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Video from './components/Video'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />

        {/* Why Enver Section */}
        <section className="py-16">
          <div className="container-center text-center">
            <h2 className="text-4xl font-extrabold mb-6">Why Enver Is The Best Choice?</h2>
            <p className="text-gray-400 mb-12">
              Watch this one minute video so you understand why you should use our services!
            </p>

            {/* Video Wrapper */}
            <div className="w-full relative mb-16">
              <Video videoId="ZK-rNEhJIDs" />
            </div>

            {/* Services */}
            <div className="mt-24">
              <Services />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-transparent">
          <div className="container-center">
            <h2 className="text-4xl font-extrabold mb-8">Our Awesome Portfolio</h2>
            <Portfolio />
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  )
}
