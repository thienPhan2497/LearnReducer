import * as React from 'react';
import {TodoReducer} from '../Reducers/TodoReducer';
import {GET_TODOS, SAVE_TODOS} from '../Reducers/types'

export const TodoContext = React.createContext()

const TodoContextProvider = (props) => {
  const {children} = props;
  const [todos, dispatch] = React.useReducer(TodoReducer ,[])

  React.useEffect(() => {
   dispatch({
     type: GET_TODOS,
     payload: null
   })
  }, []);

  React.useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos }
    })
  }, [todos])


  // const [todos, setTodos] = React.useState([
  //   {id: 1, title: 'Cong viec 1' },
  //   {id: 2, title: 'Cong viec 2' },
  //   {id: 3, title: 'Cong viec 3' }
  // ]);

  // React.useEffect(() => {
  //   console.log("Getting To do items")
  //   const value = localStorage.getItem('todos')
  //   if(value) setTodos(JSON.parse(value))
  // }, [])

  // React.useEffect(() => {
  //   console.log("Saving To do items")
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo])
  // }

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter(todo => todo.id !== id))
  // }

  const todoContextData = {
    todos,
    dispatch
  }

  return(
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;