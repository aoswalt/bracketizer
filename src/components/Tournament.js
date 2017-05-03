import {
  buildTournament,
  encodeLocation,
} from '../util'
import React, { PureComponent } from 'react'
import Bracket from './Bracket'

const getPlayer = (bracket, location, opposite) => opposite
  ? bracket[location.bracket][location.round][location.match][(location.position - 1) * -1]
  : bracket[location.bracket][location.round][location.match][location.position]

const setPlayer = (bracket, location, player) =>
  bracket[location.bracket][location.round][location.match][location.position] = player


class Tournament extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tournament: buildTournament(props.participants),
    }
  }

  play = (winLocation) => () => {
    const temp = JSON.parse(JSON.stringify(this.state.tournament))

    const mapping = this.props.mapping[encodeLocation(winLocation, true)]
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
      </div>
    )
  }
}

export default Tournament
