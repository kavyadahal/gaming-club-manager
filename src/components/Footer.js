import React from 'react'
const h = React.createElement

export default function Footer(){
  return h('footer', { className: 'footer' },
    h('div', { className: 'container' },
      h('div', null, '© ', new Date().getFullYear(), ' Gaming Club — All rights reserved.'),
      h('div', { className: 'tag' }, 'Built with React (no JSX)')
    )
  )
}
