import React, { Component } from 'react'
const initialState = localStorage.getItem('isAuth' || false)

export const AuthContext = React.createContext(initialState)

class AuthProvider extends Component {
  state = { isAuth: initialState }
  LogIn = () => {
    this.setState(() => ({ isAuth: true }))
    localStorage.setItem('isAuth', true)
    return this.state
  }
  LogOut = () => {
    this.setState(() => ({ isAuth: false }))
    localStorage.removeItem('isAuth')
    return this.state
  }
  render() {
    return (
      <AuthContext.Provider
        value={{ isAuth: this.state.isAuth, logIn: this.LogIn, logOut: this.LogOut }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
