import './index.css'
import el from './src/Element'


const ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])

const ulRoot = ul.render()
document.body.appendChild(ulRoot)
