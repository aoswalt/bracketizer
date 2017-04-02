import React, { PureComponent } from 'react'
import Round from './components/Round'

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

const styles = {
  bracket: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
  },
}

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    return (
      <div style={styles.bracket}>
        {bracket.map(r => <Round matches={r} />)}
      </div>
    )
  }
}

export default App
