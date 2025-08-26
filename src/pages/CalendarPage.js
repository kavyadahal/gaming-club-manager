import React from 'react'
const h = React.createElement

export default function CalendarPage(){
  return h('div', { className: 'container' },
    h('h2', null, 'Calendar'),
    h('p', { className: 'tag' }, 'Embed your Google Calendar or schedules here.')
  )
}
