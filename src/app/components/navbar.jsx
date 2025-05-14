import React from 'react'

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar__logo">
        <h1>My Website</h1>
      </div>
      <nav className="navbar__links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </section>
  )
}

export default Navbar