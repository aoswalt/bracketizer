import {
  ArrayX,
} from '.'

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
  return finishRounds([initialMatches])
}

const buildTournament = (participantList) => {
  //TODO(adam): need to handle division to multiple brackets
  return [buildBracket(participantList)]
}

export {
  buildTournament,
}
