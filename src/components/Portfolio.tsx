import React from 'react'

const images = [
  '/src/assets/p1.png',
  '/src/assets/p2.png',
  '/src/assets/p3.jpg'
]

export default function Portfolio(){
  return (
    <div id="portfolio">
      <div className="flex gap-6">
        {images.map((src, idx)=> (
          <div key={idx} className="w-64 h-40 rounded-xl glass-card overflow-hidden p-2 flex items-center justify-center">
            <img src={src} alt={`Project ${idx+1}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
