import React, { PureComponent } from 'react'
import { App as style } from './styles'
import logo from './logo.svg'

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <img src={logo} className={classes.logo} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={classes.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default style(App)
