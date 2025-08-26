import React from 'react'
import EventCard from '../components/EventCard.js'
import { events } from '../data.js'
const h = React.createElement

export default function Events(){
  return h('div', { className: 'container' },
    h('h2', null, 'Events'),
    h('div', { className: 'grid' },
      ...events.map(e => h(EventCard, { key: e.id, ...e }))
    )
  )
}
