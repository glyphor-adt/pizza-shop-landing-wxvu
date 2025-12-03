import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="/order" className="hover:text-white">Order Online</a></li>
              <li><a href="/catering" className="hover:text-white">Catering</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="mb-2">Sign up for our newsletter and get 10% off your first order!</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-gray-800 text-gray-400 px-4 py-2 rounded-l-md focus:outline-none" />
              <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Luigi's Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
