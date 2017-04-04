import Divider from './Divider'
import Participant from './Participant'
import React from 'react'
import injectSheet from 'react-jss'

const style = injectSheet({
  container: {
    'display': 'inline-block',
  },
  matchContainer: {
    'border': '1px solid black',
    'border-radius': '.3rem',
    'display': 'flex',
    'flex-direction': 'column',
  },
})

const Match = ({
  classes,
  participants,
  matchSize,
}) => (
  <div className={classes.container} style={{ width: matchSize }}>
    <div className={classes.matchContainer}>
      <Participant name={participants[0]} />
      <Divider />
      <Participant name={participants[1]} />
    </div>
  </div>
)

export default style(Match)
