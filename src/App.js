import { parseLocation } from './util'
import React, { PureComponent } from 'react'
import Tournament from './components/Tournament'

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

class App extends PureComponent {

  render() {
    return (
      <div>
        <Tournament participants={participantList} mapping={parsedMapping} />
      </div>
    )
  }
}

export default App
