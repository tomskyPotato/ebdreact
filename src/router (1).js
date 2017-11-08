import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import loginClass from './login.js';

export default class ModalSwitch extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/gallery' component={Gallery}/>
      </div>
    )
  }
}

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' }
]

const Thumbnail = ({ color }) =>
  <div style={{
    width: 50,
    height: 50,
    background: color
  }}/>

const Image = ({ color }) =>
  <div style={{
    width: '100%',
    height: 400,
    background: color
  }}></div>

const Home = () => (
  <div>
    <Link to='/gallery'>Revision: 15</Link>
    <h2>Featured Images</h2>
    <ul>
      <li><Link to='/img/2'>Tomato</Link></li>
      <li><Link to='/img/4'>Crimson</Link></li>
    </ul>
  </div>
)

const Gallery = () => (
  <div>
    {IMAGES.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)