import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const h = React.createElement

export default function Navbar() {
  const location = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  return h('nav', { className: 'nav' },
    h('div', { className: 'brand' }, '🎮 Gaming Club'),
    h('div', { className: 'links' },
      ...links.map(l =>
        h(Link, {
          key: l.to,
          to: l.to,
          style: { 
            opacity: location.pathname === l.to ? 1 : 0.75,
            fontWeight: location.pathname === l.to ? 700 : 500
          }
        }, l.label)
      ),
      h('a', { href: 'https://discord.com', target: '_blank', rel: 'noreferrer', className: 'badge' }, 'Join Discord')
    )
  )
}
