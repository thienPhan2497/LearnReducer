import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {ThemeContext} from '../Context/ThemeContext'
import {TodoContext} from '../Context/TodoContext'
import {ADD_TODOS} from '../Reducers/types'

const TodoForm = () => {
  const [title, setTitle] = React.useState('')

  const {dispatch} = React.useContext(TodoContext)
  const {theme} = React.useContext(ThemeContext)

  const {isLightTheme, dark, light} = theme
  const style = isLightTheme ? light : dark

  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const onHandleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: ADD_TODOS,
      payload: {
        todo: {
          id: uuidv4(),
          title
        }
      }
    })

    setTitle('')
  }

  return(
  <form onSubmit={onHandleSubmit}>
  {/* Ask */}
       <input type="text" name="Title" placeholder="Enter new to do..." onChange={onTitleChange} value={title} required/>
       <input style={style} type="submit" name="Add" value="Add"/>
  </form>
  )
}

export default TodoForm;
