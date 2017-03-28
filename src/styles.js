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
  logo: {
    'height': '80px',
  },
  intro: {
    'font-size': 'large',
  },
})

export { App }
