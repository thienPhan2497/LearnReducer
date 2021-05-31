/* eslint-disable no-unused-vars */
import * as React from 'react'
import {TodoContext} from '../Context/TodoContext'
import {AuthContext} from '../Context/AuthContext'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const Todos = () => {
  const {todos} = React.useContext(TodoContext)
  const {isAuthenticated} = React.useContext(AuthContext)

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
