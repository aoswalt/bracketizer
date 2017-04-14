import makeStruct from './structor'

const Location = makeStruct('bracket round match position')

const parseLocation = (matchId) => {
  const idParts = matchId.split('-')
  const matchArgs = idParts.map(i => { const val = parseInt(i, 10); return isNaN(val) ? undefined : val })
  return new Location(...matchArgs)
}

const encodeLocation = (m) => {
  const parts = []
  !isNaN(m.bracket) && parts.push(m.bracket)
  !isNaN(m.round) && parts.push(m.round)
  !isNaN(m.match) && parts.push(m.match)
  !isNaN(m.position) && parts.push(m.position)
  return parts.join('-')
}

export {
  Location,
  encodeLocation,
  parseLocation,
}
