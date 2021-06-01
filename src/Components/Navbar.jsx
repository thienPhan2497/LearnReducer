import  * as React from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import { AuthContext } from '../Context/AuthContext'
import {TOGGLE_AUTH} from '../Reducers/types'

const Navbar = () => {
  const {theme} = React.useContext(ThemeContext)
  const {isLightTheme, light, dark} = theme
  const style = isLightTheme ? light : dark

  const {isAuthenticated, dispatch} = React.useContext(AuthContext)

  const toggleAuth = () => {
    dispatch({
      type: TOGGLE_AUTH,
      payload: null,
    })
  }


  return (
  <div className="navbar" style={style}>
    <h1>My Hook Apps</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>
        {
          isAuthenticated ? 'You are Login ' : ''
        }
        <button onClick={toggleAuth}>{
          isAuthenticated ? 'Log out' : 'Log in'
        }</button>
      </li>
    </ul>
  </div>
  )
}

export default Navbar;