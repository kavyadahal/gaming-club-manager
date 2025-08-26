import React from 'react'
import { Link } from 'react-router-dom'
import { events } from '../data.js'
import EventCard from '../components/EventCard.js'
const h = React.createElement

export default function Home(){
  return h('div', null,
    h('section', { className: 'hero' },
      h('div', { className: 'container' },
        h('span', { className: 'badge' }, 'Welcome to the Club'),
        h('h1', null, 'Play. Compete. Connect.'),
        h('p', { className: 'tag' }, 'Weekly meets, tournaments and a chill community.'),
        h(Link, { to: '/events' },
          h('button', { className: 'btn' }, 'View Events')
        )
      )
    ),
    h('section', { className: 'container' },
      h('h2', null, 'Upcoming Events'),
      h('div', { className: 'grid' },
        ...events.map(e => h(EventCard, { key: e.id, ...e }))
      )
    )
  )
}
