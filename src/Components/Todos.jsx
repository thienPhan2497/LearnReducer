/* eslint-disable no-unused-vars */
import * as React from 'react'
import {TodoContext} from '../Context/TodoContext'
import {AuthContext} from '../Context/AuthContext'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import {GET_TODOS, SAVE_TODOS} from '../Reducers/types'

const Todos = () => {
  const {todos, dispatch} = React.useContext(TodoContext)
  const {isAuthenticated} = React.useContext(AuthContext)

  React.useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null
    })
   }, [dispatch]); // ?

   React.useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos }
    })
  }, [todos, dispatch])

  // const [todos, setTodos] = useState([
  //   {id: 1, title: 'Cong viec 1' },
  //   {id: 2, title: 'Cong viec 2' },
  //   {id: 3, title: 'Cong viec 3' }
  // ]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo])
  // }

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  return (
    <div className="todo-list">
      <TodoForm />
      {
        isAuthenticated ? (
          <ul>
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
        ) : <p style={{textAlign: 'center'}}>You are not Authorized</p>
      }
    </div>
  )
}

export default Todos
