import React from 'react'
import injectSheet from 'react-jss'

const style = injectSheet({
  label: {
    'align-items': 'center',
    'display': 'flex',
    'font-weight': 'bolder',
    'height': '1.2rem',
    'margin': '.4rem',
  },
})

const Participant = ({
  classes,
  name,
}) =>
  <div className={classes.label}>{name}</div>

export default style(Participant)
