
import fs from 'fs'

import { renderToString } from '@hyperapp/render/browser'

import Stub from './src/views/Stub'

const state = {}

const actions = {}

const view = s => Stub({
  css: fs.readFileSync('./dist/app.css', 'utf-8'),
  js: fs.readFileSync('./dist/app.js', 'utf-8')
})

process.stdout.write('<!DOCTYPE html>' + renderToString(view, state, actions))
