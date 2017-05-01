import {
  ArrayX,
  encodeLocation,
  parseLocation,
} from './util'
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
  [
    ['', 'Other Person'],
    ['', ''],
  ],
  [
    ['Someone', 'Else'],
    ['That Guy', ''],
    ['That Guy', 'Other Person'],
    ['', 'Other Person'],
  ],
]

//NOTE(adam): bracket-round-match, win/loss, bracket round match position
const mapping = {
  '0-0-0': {
    w: { b: 0, r: 1, m: 0, p: 0 },
    l: null,
  },
  '0-0-1': {
    w: { b: 0, r: 1, m: 0, p: 1 },
    l: null,
  },
  '0-0-2': {
    w: { b: 0, r: 1, m: 1, p: 0 },
    l: null,
  },
  '0-0-3': {
    w: { b: 0, r: 2, m: 1, p: 1 },
    l: null,
  },
  '0-1-0': {
    w: { b: 0, r: 2, m: 0, p: 0 },
    l: null,
  },
  '0-1-1': {
    w: { b: 0, r: 2, m: 0, p: 1 },
    l: null,
  },
  '0-2-0': {
    w: null,
    l: null,
  },
}

const encodedMapping = [
  '0-0-0 0-1-0-0 _',
  '0-0-1 0-1-0-1 _',
  '0-0-2 0-1-1-0 _',
  '0-0-3 0-1-1-1 _',
  '0-1-0 0-2-0-0 _',
  '0-1-1 0-2-0-1 _',
  '0-2-1 _ _',
]


const buildMatches = ({ head, tail }, acc = []) => {
  const currentMatchList = [...acc, head]
  return tail.length
    ? buildMatches(ArrayX.take(tail, 2), currentMatchList)
    : currentMatchList
}

const buildRound = list => buildMatches(ArrayX.take(list, 2))

const finishRounds = (roundList) => {
  const lastLength = roundList[roundList.length - 1].length
  return lastLength > 1
    ? finishRounds([...roundList, buildRound(ArrayX.build(lastLength, ''))])
    : roundList
}

const buildBracket = (participantList) => {
  const initialMatches = buildRound(participantList)
  return [finishRounds([initialMatches])]
}


const parsedMapping = encodedMapping.reduce((acc, m) => {
  const data = m.split(' ')
  return {
    ...acc,
    [data[0]]: {
      win: parseLocation(data[1]),
      lose: parseLocation(data[2]),
    },
  }
}, {})

const getPlayer = (bracket, location, opposite) => opposite
  ? bracket[location.bracket][location.round][location.match][(location.position - 1) * -1]
  : bracket[location.bracket][location.round][location.match][location.position]

const setPlayer = (bracket, location, player) =>
  bracket[location.bracket][location.round][location.match][location.position] = player


class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      bracketList: buildBracket(participantList),
    }
  }

  play = (winLocation) => () => {
    const temp = JSON.parse(JSON.stringify(this.state.bracketList))

    const mapping = parsedMapping[encodeLocation(winLocation, true)]
    if(!mapping) return

    const {
      win: winTarget,
      lose: loseTarget,
    } = mapping

    if(winTarget) {
      const winner = getPlayer(temp, winLocation)
      setPlayer(temp, winTarget, winner)
    }

    if(loseTarget) {
      const loser = getPlayer(temp, winLocation, true)
      loseTarget.isComplete && setPlayer(temp, loseTarget, loser)
    }

    this.setState({ bracketList: temp })
  }

  render() {
    return (
      <div>
        {this.state.bracketList.map((b, i) =>
          <Bracket key={i} bracket={b} id={i} onPositionClick={this.play} />
        )}
        <Bracket bracket={bracket} id={0} onPositionClick={p => () => console.warn(p)} />
      </div>
    )
  }
}

export default App
