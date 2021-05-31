import * as React from 'react'
import {ThemeContext} from '../Context/ThemeContext'
import {TodoContext} from '../Context/TodoContext'
import {DELETE_TODOS} from '../Reducers/types'

const TodoItem = (props) => {
  const {todo} = props

  const {dispatch} = React.useContext(TodoContext)
  const {theme} = React.useContext(ThemeContext)
  const {isLightTheme, light, dark} = theme
  const style = isLightTheme ? light : dark

  const onHandleDelete = () => {
    dispatch({
      type: DELETE_TODOS,
      payload: {
        id: todo.id
      }
    })
  }

  return <li onClick={onHandleDelete} style={style}>{todo.title}</li>
  // return <li onClick={() => deleteTodo(todo.id)} style={style}>{todo.title}</li>
}

export default TodoItem;