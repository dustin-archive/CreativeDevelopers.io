
import { h } from 'hyperapp'

import App from './App'

const Stub = data =>
  h('html', { lang: 'en-US' }, [
    h('head', null, [
      h('meta', { charset: 'utf-8' }),
      h('title', null, 'Creative Developers'),
      h('meta', { name: 'google-site-verification', content: 'z7NVwftYsHrQXIO0BJt2hCAK6jP16n-D7DQrmgxLI_I' }),
      h('meta', { name: 'author', content: 'Dustin Dowell' }),
      h('meta', { name: 'description', content: 'A Discord community for creative developers!' }),
      h('meta', { name: 'keywords', content: 'backend, chat, community, creative, developers, discord, frontend, slack' }),
      h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }),
      h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
      h('style', { innerHTML: data.css }),
      h('script', { defer: true, src: 'app.js' })
    ]),
    h('body', null, [
      h('div', { id: 'app' }, App)
    ])
  ])

export default Stub
