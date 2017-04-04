import React from 'react'
import injectSheet from 'react-jss'

const style = injectSheet({
  divider: {
    'border-top': '1px solid grey',
  },
})

const Divider = ({ classes }) =>
  <div className={classes.divider}></div>

export default style(Divider)
