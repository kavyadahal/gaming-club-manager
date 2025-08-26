import React from 'react'
const h = React.createElement

export default function About(){
  return h('div', { className: 'container' },
    h('h2', null, 'About Us'),
    h('p', null, 'We are a student-run Gaming Club hosting weekly sessions, LAN parties, and tournaments across popular titles.'),
    h('ul', null,
      h('li', null, 'Weekly casual play nights'),
      h('li', null, 'Monthly tournaments'),
      h('li', null, 'Beginner-friendly coaching')
    )
  )
}
