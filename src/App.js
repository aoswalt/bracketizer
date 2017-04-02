import React, { PureComponent } from 'react'
import Bracket from './components/Bracket'

const bracket = [
  [
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
  ],
  [
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
  ],
  [
    ['Someone', 'Other Person'],
    ['Someone', 'Other Person'],
  ],
  [
    ['Someone', 'Other Person'],
  ],
]

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    return (
      <Bracket bracket={bracket} />
    )
  }
}

export default App
