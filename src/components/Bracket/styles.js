import injectSheet from 'react-jss'

const Bracket = injectSheet({
  bracket: {
    'display': 'flex',
    'align-items': 'stretch',
    'position': 'relative',
  },
})

const Round = injectSheet({
  round: {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-around',
  },
})

const Match = injectSheet({
  container: {
    'display': 'inline-block',
  },
  matchContainer: {
    'display': 'flex',
    'flex-direction': 'column',
    'border': '1px solid black',
    'border-radius': '.3rem',
  },
})

const Participant = injectSheet({
  label: {
    'font-weight': 'bolder',
    'margin': '.4rem',
  },
})

const Divider = injectSheet({
  divider: {
    'border-top': '1px solid grey',
  },
})

export {
  Bracket,
  Divider,
  Match,
  Participant,
  Round,
}
