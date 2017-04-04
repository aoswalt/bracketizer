import Match from './Match'
import React from 'react'
import injectSheet from 'react-jss'

const style = injectSheet({
  round: {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },
})

const Round = ({
  classes,
  matches,
  matchSize,
}) =>
  <div className={classes.round}>
    {matches.map((m, i) =>
      <Match
        key={i}
        participants={m}
        matchSize={matchSize}
      />
    )}
  </div>

export default style(Round)
