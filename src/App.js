import React, { PureComponent } from 'react'
import Bracket from './components/Bracket'

const bracket = [
  [
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
  ],
  [
    ['Someone', 'Else'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
    ['That Guy', 'Other Person'],
  ],
  [
    ['Someone', 'Other Person'],
    ['Someone', 'Other Person'],
  ],
  [
    ['Someone', 'Other Person'],
  ],
]

const longestEntry = (list, lengthFunc, initalMax = 0) =>
  list.reduce((max, l) => Math.max(max, lengthFunc(l)), initalMax)

const stringLength = (s) => s.length

const longestEntryLength = (l, initalMax = 0) => longestEntry(l, stringLength, initalMax)

const getLongestParticipantLength = (roundList) =>
  roundList.reduce((max, round) => longestEntry(round, longestEntryLength, max), 0)

const widthRatio = 0.75

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    const longest = getLongestParticipantLength(bracket)
    const matchSize = `${longest * widthRatio}rem`
    return (
      <Bracket bracket={bracket} matchSize={matchSize} />
    )
  }
}

export default App
