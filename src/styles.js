import injectSheet from 'react-jss'

const App = injectSheet({
  container: {
    'text-align': 'center',
  },
  header: {
    'background-color': '#222',
    'height': '150px',
    'padding': '20px',
    'color': 'white',
  },
  intro: {
    'font-size': 'large',
  },
})

export { App }
