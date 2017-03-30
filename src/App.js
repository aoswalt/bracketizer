import React, { PureComponent } from 'react'
import { Match } from './components/Match'

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    return (
      <div>
        <Match
          participants={['That Guy', 'Other Person']}
        />
      </div>
    )
  }
}

export default App
