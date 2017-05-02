import {
  ArrayX,
} from '.'

//NOTE(adam): currently throwing away remainder
const buildRound = list => ArrayX.divide(list, 2).segments

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
