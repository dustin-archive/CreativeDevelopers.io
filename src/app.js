
'use strict'

import { app } from 'hyperapp'

import App from './views/App'

const state = {}

const actions = {}

const view = s => App

app(state, actions, view, document.getElementById('app'))
