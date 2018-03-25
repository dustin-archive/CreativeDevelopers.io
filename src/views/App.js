
import { h } from 'hyperapp'

const App = d =>
  h('div', { class: 'app' }, [
    h('div', { class: 'app-box' }, [
      h('h1', null, 'Creative\nDevelopers.io'),
      h('h2', null, 'A Discord community for creative developers!'),
      h('ul', { class: 'app-list' }, [
        h('li', null, 'Chat with other developers.'),
        h('li', null, 'Ask questions and share knowledge.'),
        h('li', null, 'Find jobs and get feedback.')
      ]),
      h('a', { class: 'app-button', href: 'https://discord.gg/rkrFHDb' }, 'Join Now')
    ])
  ])

export default App
