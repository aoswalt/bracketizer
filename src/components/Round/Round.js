import Match from '../../components/Match'
import React from 'react'

const styles = {
  round: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}

export default ({ matches }) =>
  <div style={styles.round}>
    {matches.map(m => <Match participants={m} />)}
  </div>
