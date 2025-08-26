import React from 'react'
const h = React.createElement

export default function FloatingDiscord(){
  return h('a', {
    href: 'https://discord.com',
    target: '_blank',
    rel: 'noreferrer',
    style: {
      position: 'fixed', right: 16, bottom: 16, padding: '12px 14px',
      background: '#5865F2', color: '#fff', borderRadius: 12
    }
  }, 'Discord')
}
