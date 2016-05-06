import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store'
import 'normalize.css'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    /* eslint-disable global-require */
    const NewApp = require('./App.jsx').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NewApp />
        </Provider>
      </AppContainer>,
      document.getElementById('container')
    )
  })
}
