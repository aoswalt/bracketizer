import { Location } from '../util/location'
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
  bracketId,
  classes,
  id,
  matchId,
  name,
  onClick,
  roundId,
}) =>
  <div
    className={classes.label}
    onClick={onClick(new Location(bracketId, roundId, matchId, id))}
  >
    {name}
  </div>


export default style(Participant)
