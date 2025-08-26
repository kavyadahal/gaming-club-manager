import React from 'react'
import { gallery } from '../data.js'
const h = React.createElement

export default function Gallery(){
  return h('div', { className: 'container' },
    h('h2', null, 'Gallery'),
    h('div', { className: 'grid' },
      ...gallery.map((src, i) =>
        h('div', { key: i, className: 'card' },
          h('img', { src, alt: 'Gallery ' + (i+1) })
        )
      )
    )
  )
}
