import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'

import '../../ui/stylesheets/main.css'
import App from '../../ui/App'

Meteor.autorun(() => {
    render(<App />, document.getElementById('root'))
})