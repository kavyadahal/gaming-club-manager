import React from 'react'
const h = React.createElement

export default function EventCard({ title, date, location, image }){
  return h('div', { className: 'card' },
    h('img', { src: image, alt: title }),
    h('h3', null, title),
    h('div', { className: 'tag' }, date, ' • ', location),
    h('button', { className: 'btn', onClick: () => alert('Registered for ' + title) }, 'Register')
  )
}
