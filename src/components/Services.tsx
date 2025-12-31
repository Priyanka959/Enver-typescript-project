import React from 'react'

const items = [
  {title: 'Development', desc: 'Create a platform with the best and coolest quality from us.', icon: '/assets/Development.png'},
  {title: 'UI/UX Designer', desc: 'We provide UI/UX Design services, and of course with the best quality.', icon: '/assets/uiux.png'},
  {title: 'Graphik Designer', desc: 'We provide Graphic Design services, with the best designers.', icon: '/assets/Graphik_designer.png'},
  {title: 'Motion Graphik', desc: 'Create a platform with the best and coolest quality from us.', icon: '/assets/Motion_Graphik.png'},
  {title: 'Photography', desc: 'We provide Photography services, with the best quality.', icon: '/assets/Photography.png'},
  {title: 'Videography', desc: 'Create a platform with the best and coolest quality from us.', icon: '/assets/videography.png'}
]

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container-center text-center mb-12">
        {/* Bold heading for the section */}
        <h2 className="text-4xl font-extrabold mb-4">The Services We Provide</h2>
        
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title} className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center">
              <img src={it.icon} alt={it.title} className="w-10 h-10 object-contain" />
            </div>
            <h3 className="font-semibold mb-2">{it.title}</h3>
            <p className="text-sm text-gray-400">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
