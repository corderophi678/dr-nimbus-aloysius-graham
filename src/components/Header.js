import React from 'react'

export function Header() {
  return (
    <header className="bg-white-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l z-1">
      <nav className="f6 fw6 ttu tracked">
        <a className="link dim black dib mr3" href="#top" title="Home">
          Home
        </a>
        <a className="link dim black dib mr3" href="#about" title="About">
          About
        </a>
        <a className="link dim black dib mr3" href="#cv" title="CV">
          CV
        </a>
        <a className="link dim black dib" href="#contact" title="Contact">
          Contact
        </a>
      </nav>
    </header>
  )
}
