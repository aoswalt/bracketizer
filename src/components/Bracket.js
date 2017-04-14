import React from 'react'
import Round from './Round'
import injectSheet from 'react-jss'

const widthRatio = 0.75


const longestEntry = (list, lengthFunc, initalMax = 0) =>
  list.reduce((max, l) => Math.max(max, lengthFunc(l)), initalMax)

const stringLength = s => s.length

const longestEntryLength = (l, initalMax = 0) => longestEntry(l, stringLength, initalMax)

const getLongestParticipantLength = roundList =>
  roundList.reduce((max, round) => longestEntry(round, longestEntryLength, max), 0)


const style = injectSheet({
  bracket: {
    'align-items': 'stretch',
    'display': 'flex',
    'position': 'relative',
  },
})

const Bracket = ({
  bracket,
  classes,
  id,
  onPositionClick,
}) => {
  const longest = getLongestParticipantLength(bracket)
  const matchSize = `${longest * widthRatio}rem`

  return <div className={classes.bracket}>
    {bracket.map((r, i) =>
      <Round
        key={i}
        id={i}
        bracketId={id}
        matches={r}
        matchSize={matchSize}
        onPositionClick={onPositionClick}
      />
    )}
  </div>
}

export default style(Bracket)
