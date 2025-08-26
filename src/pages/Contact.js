import React from 'react'
const h = React.createElement

export default function Contact(){
  function submit(e){ e.preventDefault(); alert('Thanks! We will reach out soon.') }
  return h('div', { className: 'container' },
    h('h2', null, 'Contact'),
    h('form', { onSubmit: submit, className: 'card' },
      h('label', null, 'Your Email'),
      h('input', { type: 'email', required: true, placeholder: 'you@example.com', style: { padding: 10, margin: '6px 0', borderRadius: 8, border: '1px solid #2a2e45', background: '#0f1220', color: 'white' } }),
      h('label', null, 'Message'),
      h('textarea', { required: true, rows: 4, placeholder: 'Hey Gaming Club...', style: { padding: 10, margin: '6px 0', borderRadius: 8, border: '1px solid #2a2e45', background: '#0f1220', color: 'white' } }),
      h('button', { className: 'btn', type: 'submit' }, 'Send')
    )
  )
}
