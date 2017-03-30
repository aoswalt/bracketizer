import {
  Divider as styleDivider,
  Match as styleMatch,
  Participant as styleParticipant,
} from './styles'
import React from 'react'

const Participant = styleParticipant(({ classes, name }) =>
  <div className={classes.label}>{name}</div>)

const Divider = styleDivider(({ classes }) =>
  <div className={classes.divider}></div>)

export default styleMatch(({
  classes,
  participants,
}) => (
  <div className={classes.container}>
    <div className={classes.matchContainer}>
      <Participant name={participants[0]} />
      <Divider />
      <Participant name={participants[1]} />
    </div>
  </div>
))
