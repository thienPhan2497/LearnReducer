import * as React from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeToggle = () => {
  const {toggleTheme} = React.useContext(ThemeContext)

  return (
    <div className="toggle-btn">
      <button type="button" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ThemeToggle
