import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import '../../ui/stylesheets/main.css'
import App from '../../ui/App'

const router = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

Meteor.autorun(() => {
    render(router, document.getElementById('root'))
})
