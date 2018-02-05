import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
import './assets/main.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
