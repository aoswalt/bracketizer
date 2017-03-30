import injectSheet from 'react-jss'

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
  Divider,
  Match,
  Participant,
}
