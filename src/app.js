
'use strict'

import { h, app } from 'hyperapp'

const state = {}

const actions = {}

const view = (...args) =>
  h('div', { class: 'app' }, [
    h('img', { src: 'images/hyperapp.png' })
  ])

app(state, actions, view, document.body)
