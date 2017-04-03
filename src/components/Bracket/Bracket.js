import {
  Bracket as styleBracket,
  Divider as styleDivider,
  Match as styleMatch,
  Participant as styleParticipant,
  Round as styleRound,
} from './styles'
import React from 'react'


const widthRatio = 0.75


const longestEntry = (list, lengthFunc, initalMax = 0) =>
  list.reduce((max, l) => Math.max(max, lengthFunc(l)), initalMax)

const stringLength = (s) => s.length

const longestEntryLength = (l, initalMax = 0) => longestEntry(l, stringLength, initalMax)

const getLongestParticipantLength = (roundList) =>
  roundList.reduce((max, round) => longestEntry(round, longestEntryLength, max), 0)


const Bracket = styleBracket(({ bracket, classes }) => {
  const longest = getLongestParticipantLength(bracket)
  const matchSize = `${longest * widthRatio}rem`

  return <div className={classes.bracket}>
    {bracket.map((r, i) => <Round key={i} matches={r} matchSize={matchSize} />)}
  </div>
})

const Round = styleRound(({ classes, matches, matchSize }) =>
  <div className={classes.round}>
    {matches.map((m, i) => <Match key={i} participants={m} matchSize={matchSize} />)}
  </div>)

const Match = styleMatch(({
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
))

const Participant = styleParticipant(({ classes, name }) =>
  <div className={classes.label}>{name}</div>)

const Divider = styleDivider(({ classes }) =>
  <div className={classes.divider}></div>)

export default Bracket
