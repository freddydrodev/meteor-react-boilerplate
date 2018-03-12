import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/page-one" component={PageOne} />
                    <Route path="/page-two" component={PageTwo} />
                    <Route path="/" exact render={() => <h1>Hello World</h1>} />
                    <Route render={() => <h1>404 Page Not Found</h1>} />
                    </Switch>
            </div>
        )
    }
}
