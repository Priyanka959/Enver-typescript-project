import React from 'react'

export default function Contact(){
  return (
    <section className="py-20">
      <div className="container-center bg-gradient-to-br from-[#0b0710] to-transparent rounded-2xl p-12 glass-card">
        <div className="md:flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-extrabold">Contact us for the service you want to use</h3>
            <p className="text-gray-400 mt-3">We will help you build and design your platform with high quality.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="bg-primary px-6 py-3 rounded-md">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  )
}
