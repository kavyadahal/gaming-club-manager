import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import FloatingDiscord from './components/FloatingDiscord.js'
import Home from './pages/Home.js'
import Events from './pages/Events.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Gallery from './pages/Gallery.js'
import CalendarPage from './pages/CalendarPage.js'

const h = React.createElement

export default function App(){
  return h(BrowserRouter, null,
    h(Navbar),
    h('main', null,
      h(Routes, null,
        h(Route, { path: '/', element: h(Home) }),
        h(Route, { path: '/events', element: h(Events) }),
        h(Route, { path: '/gallery', element: h(Gallery) }),
        h(Route, { path: '/about', element: h(About) }),
        h(Route, { path: '/contact', element: h(Contact) }),
        h(Route, { path: '/calendar', element: h(CalendarPage) })
      )
    ),
    h(FloatingDiscord),
    h(Footer)
  )
}
