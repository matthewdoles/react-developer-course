import React from 'react'
import ReactDOM from 'react-dom'
import { BroswerRouter } from 'react-router-dom'

import './index.css'
import App from './App'

const app = (
    <BroswerRouter>
        <App />
    </BroswerRouter>
)

ReactDOM.render(app, document.getElementById('root'))