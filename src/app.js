
'use strict'

import { h, app } from 'hyperapp'

const state = {}

const actions = {}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-box' }, [
      h('h1', null, 'Creative Developers'),
      h('h2', null, 'A Discord community for creative developers!'),
      h('div', { class: 'app-list' }, [
        h('div', null, 'Chat with other developers.'),
        h('div', null, 'Ask questions and share knowledge.'),
        h('div', null, 'Find jobs and get feedback.')
      ]),
      h('a', { class: 'app-button', href: 'https://discord.gg/rkrFHDb' }, 'Let\'s go!')
    ])
  ])

app(state, actions, view, document.body)
