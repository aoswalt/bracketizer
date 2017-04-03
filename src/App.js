import React, { PureComponent } from 'react'
import Bracket from './components/Bracket'

const participantList = [
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'khan',
  'ver',
  'diskus',
]

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
    ['That Guy', ''],
    ['That Guy', 'Other Person'],
    ['', 'Other Person'],
  ],
  [
    ['', 'Other Person'],
    ['', ''],
  ],
  [
    ['', ''],
  ],
]

const buildArray = (length, val) =>
  Array.from({ length }).map((v, i) => (val !== undefined) ? val : i)

const split = (list, count) => ({
  head: list.slice(0, count),
  tail: list.slice(count)
})

const buildMatches = ({ head, tail }, acc = []) =>
  tail.length ? buildMatches(split(tail, 2), [...acc, head]) : [...acc, head]

const buildRound = (list) => buildMatches(split(list, 2))

const finishRounds = (roundList) => {
  const lastLength = roundList[roundList.length - 1].length
  return lastLength > 1
    ? finishRounds([...roundList, buildRound(buildArray(lastLength, ''))])
    : roundList
}

const buildBracket = (list) => {
  const initialMatches = buildRound(list)
  return finishRounds([initialMatches])
}

/** Main app component. */
class App extends PureComponent {
  /** Render method. */
  render() {
    return (
      <Bracket bracket={buildBracket(participantList)} />
    )
  }
}

export default App
