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
  bracketId,
  classes,
  id,
  matchSize,
  onParticipantClick,
  participants,
  roundId,
}) => (
  <div className={classes.container} style={{ width: matchSize }}>
    <div className={classes.matchContainer}>
      {participants.reduce((res, p, i, pList) =>
        [...res,
          <Participant
            id={i}
            key={`p-${i}`}
            name={p}
          />,
        ].concat(i < pList.length - 1 ? <Divider key={`d-${i}`} /> : null),
        []
      )}
    </div>
  </div>
)

export default style(Match)
