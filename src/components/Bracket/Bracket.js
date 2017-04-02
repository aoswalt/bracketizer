import {
  Bracket as styleBracket,
  Divider as styleDivider,
  Match as styleMatch,
  Participant as styleParticipant,
  Round as styleRound,
} from './styles'
import React from 'react'

const Bracket = styleBracket(({ bracket, classes }) =>
  <div className={classes.bracket}>
    {bracket.map(r => <Round matches={r} />)}
  </div>
)

const Round = styleRound(({ classes, matches }) =>
  <div className={classes.round}>
    {matches.map(m => <Match participants={m} />)}
  </div>)

const Match = styleMatch(({
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

const Participant = styleParticipant(({ classes, name }) =>
  <div className={classes.label}>{name}</div>)

const Divider = styleDivider(({ classes }) =>
  <div className={classes.divider}></div>)

export default Bracket
