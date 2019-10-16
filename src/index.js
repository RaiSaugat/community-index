import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import Profile from './pages/Profile/Profile'
import NotFound from './pages/NotFound/NotFound'
import PersonOverview from './pages/PersonOverview/PersonOverview'
import * as serviceWorker from './serviceWorker'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'https://community-index.herokuapp.com/v1/graphql',
})

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/overview" component={PersonOverview} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
