
import fs from 'fs'

import { app } from 'hyperapp'
import { withRender } from '@hyperapp/render'

import App from './src/views/App'

const css = fs.readFileSync('./dist/app.css', 'utf-8')

const state = {}

const actions = {}

const view = s => App

const render = withRender(app)(state, actions, view).toString()

const html = `<!DOCTYPE html>
<html lang='en-US'>
  <head>
    <meta charset='utf-8'>
    <title>Creative Developers</title>
    <meta name='google-site-verification' content='z7NVwftYsHrQXIO0BJt2hCAK6jP16n-D7DQrmgxLI_I'>
    <meta name='author' content='Dustin Dowell'>
    <meta name='description' content='A Discord community for creative developers!'>
    <meta name='keywords' content='backend, chat, community, creative, developers, discord, frontend, slack'>
    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=0'>
    <link rel='icon' type='image/png' href='favicon.png'>
    <style>${css}</style>
    <script defer src='app.js'></script>
  </head>
  <body>
    <div id='app'>${render}</div>
  </body>
</html>`

// const view = s =>
//   h('html', { lang: 'en-US' }, [
//     h('head', null, [
//       h('meta', { charset: 'utf-8' }),
//       h('title', null, 'Creative Developers'),
//       h('meta', { name: 'google-site-verification', content: 'z7NVwftYsHrQXIO0BJt2hCAK6jP16n-D7DQrmgxLI_I' }),
//       h('meta', { name: 'author', content: 'Dustin Dowell' }),
//       h('meta', { name: 'description', content: 'A Discord community for creative developers!' }),
//       h('meta', { name: 'keywords', content: 'backend, chat, community, creative, developers, discord, frontend, slack' }),
//       h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' }),
//       h('link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }),
//       h('style', null, css),
//       h('script', { defer: true, src: 'app.js' })
//     ]),
//     h('body', null, [
//       h('div', { id: 'app' }, App)
//     ])
//   ])

// process.stdout.write('<!DOCTYPE html>' + withRender(app)(state, actions, view).toString())

process.stdout.write(html)
