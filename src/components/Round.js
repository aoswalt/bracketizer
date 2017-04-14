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
  bracketId,
  classes,
  id,
  matchSize,
  matches,
  onPositionClick,
}) =>
  <div className={classes.round}>
    {matches.map((m, i) =>
      <Match
        key={i}
        bracketId={bracketId}
        id={i}
        participants={m}
        matchSize={matchSize}
        onPositionClick={onPositionClick}
        roundId={id}
      />
    )}
  </div>

export default style(Round)
