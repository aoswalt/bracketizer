import {
  buildTournament,
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
      tournament: buildTournament(participantList),
    }
  }

  play = (winLocation) => () => {
    const temp = JSON.parse(JSON.stringify(this.state.tournament))

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

    this.setState({ tournament: temp })
  }

  render() {
    return (
      <div>
        {this.state.tournament.map((b, i) =>
          <Bracket key={i} bracket={b} id={i} onPositionClick={this.play} />
        )}
        <Bracket bracket={bracket} id={0} onPositionClick={p => () => console.warn(p)} />
      </div>
    )
  }
}

export default App
