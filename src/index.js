import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore, { sagaWatch } from './store/configureStore'
import Routes from './router'
import registerServiceWorker from './registerServiceWorker'

import './statics/css/index.css'

const store = configureStore()
sagaWatch()

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
