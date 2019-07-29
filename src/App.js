import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Navigation from './components/Navigation'
import Profile from './containers/Profile'
import { Todos } from './containers/Todos'
import Blog from './containers/Blog'
import Weather from './containers/Weather'
import Contact from './containers/Contact'
import LoginForm from './containers/Auth/LoginForm'
import ThemeProvider from './contexts/Theme'
import AuthProvider from './contexts/Auth'

class App extends React.Component {

  render() {
    return (
      <AuthProvider>
        <ThemeProvider>
          <div className="App">
            <Router>
              <Navigation />
              <Switch>
                <ProtectedRoute component={Profile} path={['/user', '/profile']} />
                <ProtectedRoute component={Blog} path={'/blog'} />
                <ProtectedRoute component={Weather} path={'/weather'} />
                <ProtectedRoute component={Contact} path={'/contact'} />
                <Route component={LoginForm} path="/login" />
                <ProtectedRoute component={Todos} path={'/'} />
              </Switch>
            </Router>
          </div>
        </ThemeProvider>
      </AuthProvider>
    )
  }
}

export default App
