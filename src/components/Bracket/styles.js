import injectSheet from 'react-jss'

const Bracket = injectSheet({
  bracket: {
    'align-items': 'stretch',
    'display': 'flex',
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
    'border': '1px solid black',
    'border-radius': '.3rem',
    'display': 'flex',
    'flex-direction': 'column',
  },
})

const Participant = injectSheet({
  label: {
    'align-items': 'center',
    'display': 'flex',
    'font-weight': 'bolder',
    'height': '1.2rem',
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
