import * as React from 'react';

export const ThemeContext = React.createContext()

const ThemeContextProvider = (props) => {
  //State
  const {children} = props

  const [theme, setTheme] = React.useState({
    isLightTheme: true,
    light: {
      background: 'rgb(240, 240, 240)',
      color: 'black'
    },
    dark: {
      background: 'rgb(39, 39, 39)',
      color: 'white'
    }
  })

  //Function to toggle theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme
    })
  }

 //ContextData
  const themeContextData = {
    theme: theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;