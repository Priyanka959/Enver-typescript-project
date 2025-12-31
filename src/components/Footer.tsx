import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8">
      <div className="container-center flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
          <span>Enver</span>
        </div>
        <div className="flex gap-6">
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">&copy; 2024 Enver all rights reserved</a>
        </div>
      </div>
    </footer>
  )
}
