import React, { Component } from 'react'

export const LIGHT = 'light'
export const DARK = 'dark'

export const ThemeContext = React.createContext(localStorage.getItem('theme') || LIGHT)

const COLORS = {
  [DARK]: { primary: '#8db9c4', background: '#5e5a5a' },
  [LIGHT]: { primary: '#5e5a5a', background: '#8db9c4' },
}

class ThemeProvider extends Component {
  state = { theme: localStorage.getItem('theme') || LIGHT }
  toggleTheme = () => {
    this.setState(() => {
      const currentTheme = localStorage.getItem('theme')
      const theme = currentTheme === LIGHT ? DARK : LIGHT
      localStorage.setItem('theme', theme)
      return {
        theme,
      }
    })
  }
  setTheme = theme => {
    this.setState(() => {
      localStorage.setItem('theme', theme)
      return {
        theme,
      }
    })
  }

  render() {
    const { theme } = this.state
    return (
      <ThemeContext.Provider
        value={{ colors: COLORS[theme], toggleTheme: this.toggleTheme, setTheme: this.setTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
