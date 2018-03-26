
'use strict'

import { app } from 'hyperapp'

import App from './views/App'

const state = {}

const actions = {}

const view = s => App

app(state, actions, view, document.getElementById('app'))

const start = window.START
const end = new Date().getTime()

console.log(start, end, end - start, 'ms')
